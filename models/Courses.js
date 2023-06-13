const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const coursesSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true
  },
  overview: {
    type: String,
    required:true
  },
  curriculum: {
    type: String,
    required:true
  },
  announcements: {
    type: String,
    default:'There is no announcement yet.'
  },
  review: {
    type: Array
  },
  lecturer: {
    type: String,
    required:true,
    ref:"Users"
  },
  learners: {
    type: Array
  },
  origins: {
    type: Array,
  },
  files: {
    type: Array
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model("Courses", coursesSchema);
