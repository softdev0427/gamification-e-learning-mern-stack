const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const mongoose = require("mongoose");
const Users = mongoose.model("Users");
const Chats = mongoose.model("Chats");
const moment = require("moment");

require("dotenv").config({ path: ".variables.env" });

exports.register = async (req, res) => {

  try {
    let { username, location, email, password, passwordCheck, role } = req.body;
    if (!email || !password || !username || !location || !passwordCheck || !role)
      return res.status(400).json({ message: "Not all fields have been entered." });
    if (password.length < 5)
      return res
        .status(400)
        .json({ success:false, message: "The password needs to be at least 5 characters long." });
    if (password !== passwordCheck)
      return res
        .status(200)
        .json({ message: "Password confirm isn't correct." });

    const existingUser = await Users.findOne({ email: email });
    
    if (existingUser)
      return res
        .status(200)
        .json({ success:false, message: "An user with this email already exists." });

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new Users({
      username,
      location,
      email,
      password: passwordHash,
      role
    });

     await newUser.save();

    return res.status(200).json({
      success: true,
      message:"Registered successfully! Please wait for permission."
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.login = async (req, res) => {

  try {
    const { email, password } = req.body;

    // validate
    if (!email || !password)
      return res.status(400).json({ message: "Please check your email and password." });

    const users = await Users.findOne({ email: email });
    if (!users)
      return res.status(400).json({
        message: "No account with this email has been registered.",
      });

    const isMatch = await bcrypt.compare(password, users.password);
    if (!isMatch)
      return res.status(400).json({
        message: "Invalid password.",
      });

      if(!users.allow)
      return res.status(400).json({
        message: "You aren't allowed yet.",
      });

      const accessToken = jwt.sign(
        { id: users._id },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_TOKEN_EXPIRATION }
      );
        // if(users.role !== "learner")
        // {
        //   return res.status(200).json({
        //     accessToken:accessToken,
        //     user:users
        //    });
        // }
      const newDate = new Date();
     
      if(moment(users.login).format("YYYY-MM-DD") < moment(newDate).format("YYYY-MM-DD"))
        {
          if(moment(newDate).subtract(1, 'days').format("YYYY-MM-DD") != moment(users.login).format("YYYY-MM-DD"))
           { await Users.findOneAndUpdate(
              { _id: users._id },
              { streaks: 1, login:moment().toDate().getTime()},
              {
                new: true,
              }
            );
          }
        else{
          await Users.findOneAndUpdate(
            { _id: users._id },
            { streaks: users.streaks + 1, login:moment().toDate().getTime()},
            {
              new: true,
            }
          );
        }

        const newUsers = await Users.findOne({ _id: users._id });
        if((newUsers.streaks) % 7 == 0)
            await Users.findOneAndUpdate(
              { _id: newUsers._id },
              { wallet: newUsers.wallet + 700},
              {
                new: true,
              }
            );
        if((newUsers.streaks) % 30 == 0)
          await Users.findOneAndUpdate(
            { _id: newUsers._id },
            { freeze: newUsers.freeze + 2},
            {
              new: true,
            }
          );
      }

      const againUsers = await Users.findOne({ _id: users._id }).lean();
      
      if((againUsers.streaks) % 7 == 0 )     
       {againUsers["earned"] = true;}
      else { againUsers["earned"] = false;}
     
      if((againUsers.streaks) % 30 == 0 )     
           { againUsers["getfreeze"] = true;}
       else{ againUsers["getfreeze"] = false;}



      return res.status(200).json({
        accessToken:accessToken,
        user:againUsers
       });
  } catch (err) {
     res.status(500).json({message: err.message });
  }
};


exports.isValidToken = async (req, res) => {
  try {
    
    const token = req.headers.authorization;

    if (!token)
      return res.status(401).json({
        message: 'Authorization token missing',
      });

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified)
      return res.status(401).json({
        message: "Token verification failed, authorization denied.",
      });

    const user = await Users.findOne({ _id: verified.id });
    if (!user)
      return res.status(401).json({
        message: "User doens't Exist, authorization denied.",
      });

      // if(user.role !== "learner")
      // {
      //   return res.status(200).json({
      //     accessToken:accessToken,
      //     user:user
      //    });
      // }

      const newDate = new Date();
     
      if(moment(user.login).format("YYYY-MM-DD") < moment(newDate).format("YYYY-MM-DD"))
        {
          if(moment(newDate).subtract(1, 'days').format("YYYY-MM-DD") != moment(user.login).format("YYYY-MM-DD"))
           { await Users.findOneAndUpdate(
              { _id: verified.id },
              { streaks: 1, login:moment().toDate().getTime()},
              {
                new: true,
              }
            );
          }
        else{
          await Users.findOneAndUpdate(
            { _id: verified.id },
            { streaks: user.streaks + 1, login:moment().toDate().getTime()},
            {
              new: true,
            }
          );
        }

        const newUsers = await Users.findOne({ _id: verified.id });
        if((newUsers.streaks) % 7 == 0)
            await Users.findOneAndUpdate(
              { _id: newUsers._id },
              { wallet: newUsers.wallet + 700},
              {
                new: true,
              }
            );
        if((newUsers.streaks) % 30 == 0)
          await Users.findOneAndUpdate(
            { _id: newUsers._id },
            { freeze: newUsers.freeze + 2},
            {
              new: true,
            }
          );
      }

      const againUsers = await Users.findOne({ _id: verified.id }).lean();
      
      if((againUsers.streaks) % 7 == 0 )     
       {againUsers["earned"] = true;}
      else { againUsers["earned"] = false;}
     
      if((againUsers.streaks) % 30 == 0 )     
           { againUsers["getfreeze"] = true;}
       else{ againUsers["getfreeze"] = false;}

      return res.status(200).json({user:againUsers});
      
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// exports.logout = async (req, res) => {
//   const result = await Admin.findOneAndUpdate(
//     { _id: req.admin._id },
//     { isLoggedIn: false },
//     {
//       new: true,
//     }
//   ).exec();

//   res.status(200).json({ isLoggedIn: result.isLoggedIn });
// };


exports.streakFreeze = async (req, res) => {
  const {userId} = req.body;

  const user = await Users.findOne({_id : userId});
   await Users.findOneAndUpdate(
    { _id: userId },
    { freeze: user.freeze - 1,
     login: moment().clone().add(1,'days')},
    {
      new: true,
    }
  );

  res.status(200).json({ success:true });
};
