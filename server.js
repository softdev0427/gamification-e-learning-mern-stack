const mongoose = require("mongoose");


// Make sure we are running node 10.0+
const [major, minor] = process.versions.node.split(".").map(parseFloat);
if (major < 10 || (major === 10 && minor <= 0)) {
  console.log(
    "Please go to nodejs.org and download version 10 or greater. 👌\n "
  );
  process.exit();
}

// import environmental variables from our variables.env file
require("dotenv").config({ path: "./.variables.env" });

// Connect to our Database and handle any bad connections
// mongoose.connect(process.env.DATABASE);

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on("error", (err) => {
  console.error(`🚫 Error → : ${err.message}`);
});

const glob = require("glob");
const path = require("path");

glob.sync("./models/*.js").forEach(function (file) {
  require(path.resolve(file));
});

// Start our app!
const app = require("./app");
app.set("port", process.env.PORT || 80);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running → On PORT : ${server.address().port}`);
});


//----------------- socket.io ------------

const io = require("socket.io")(server, {
  // pingTimeout: 60000,
  cors: {
      origin: "*"
  }
});
const Users = mongoose.model("Users");
const Chats = mongoose.model("Chats");

 var info = [];

io.on("connection", (socket) => {
  console.log("🚀 Someone connected!");
   

  socket.on('start', async(userEmail) => {

    const indexOfObject = info.findIndex(object => {
      return object.socketId === socket.id;
    });
    if(indexOfObject === -1)
    {info.push({socketId:socket.id, userEmail});}

    const chatUser = await Chats.find({email:{$ne:userEmail}});
    var users = [];
    const me = await Chats.findOne({email:userEmail});

    for(var k = 0 ; k <chatUser.length ; k++){
       users[k] = await Users.findOne({email:chatUser[k].email}).lean();
       users[k]["id"] = chatUser[k]._id;
       users[k]["new"] = false;

       for(var j = 0 ; j < me.chats.length ; j++)
       {
          if(me.chats[j].update && (chatUser[k].email === me.chats[j].email))
          {users[k]["new"] = true;  break;}
       }
    }

    socket.emit("getUsers", users);
  })

  socket.on('thread', async(data) => {

    const chatUser = await Chats.findOne({_id:data.threadKey});
    const user = await Users.findOne({email:chatUser.email});

    const mydata = await Chats.findOne({email:data.userEmail});
    var chatData = mydata.chats;
    var newData = [];

    for(var i = 0 ; i < chatData.length ; i++){
      if(chatData[i].email === chatUser.email)    
        {
          await Chats.findOneAndUpdate(
            {email: mydata.email},
            {$set: {"chats.$[el].update": false } },
            { 
              arrayFilters: [{ "el._id": chatData[i]._id }],
              new: true
            }
          );
          newData.push(chatData[i]);
        }
    }


    socket.emit("getThreads", {name:user.username, avatar:user.avatar, chating:newData});
  })

  socket.on('addMessage', async(data) => {
    const user = await Chats.findOne({_id: data.threadKey});
    await Chats.findOneAndUpdate({ email:data.userEmail },
       { "$push": { "chats": { email: user.email, content:data.body, send:true, update:false } }}, { safe: true, new: true});
    await Chats.findOneAndUpdate({ _id:data.threadKey },
       { "$push": { "chats": { email: data.userEmail, content:data.body, send:false } }}, { safe: true, new: true});

       const indexOfObject = info.findIndex(object => {
        return object.userEmail === user.email;
      });


      if(indexOfObject !== -1)
      {
        const me = await Chats.findOne({email:data.userEmail});
         io.to(info[indexOfObject].socketId).emit("findnew",(me._id));
      }

      socket.emit("added");

  })

  socket.on("disconnect", () => {
    const indexOfObject = info.findIndex(object => {
      return object.socketId === socket.id;
    });
    if(indexOfObject !== -1)
    info.splice(indexOfObject, 1);
    console.log("⚠️ Someone disconnected")

});
});

