const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const notificationSchema = new mongoose.Schema({
  creator: {
    type: String,
    required:true
  },
  course: {
    type: String
  },
  assessment: {
    type: Object
  },
  announcement: {
    type: String
  },
  createdAt:{
    type: Date,
    default: Date.now,
  },
  viewers:[ {
    id:String,
  }],
});

module.exports = mongoose.model("Notifications", notificationSchema);
