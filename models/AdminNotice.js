const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const noticeSchema = new mongoose.Schema({
  creator: {
    type: String,
    required:true
  },
  content: {
    type: String
  },
  createdAt:{
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model("AdminNotices", noticeSchema);
