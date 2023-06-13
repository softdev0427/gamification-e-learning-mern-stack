const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const chatSchema = new mongoose.Schema({
  email: {
    type: String,
    required:true
  },
  chats:[ {
    email:String,
    content:String,
    send:Boolean,
    savedAt:{
      type: Date,
      default: Date.now,
    },
    update:{
      type:Boolean,
      default:true
    }
  }]
});

module.exports = mongoose.model("Chats", chatSchema);
