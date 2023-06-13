
const mongoose = require("mongoose");
const Users = mongoose.model("Users");
const Courses = mongoose.model("Courses");
const AdminNotices = mongoose.model("AdminNotices");

require("dotenv").config({ path: ".variables.env" });

exports.statistics = async (req, res) => {

  try {

    const users = await Users.find({allow : true});
    const lecturers = await Users.find({allow : true , role :{ $ne : "learner"}});
    const learners = await Users.find({allow : true , role : "learner"});
    const courses = await Courses.find();
    

    const statistics = {"users":users.length , "lecturers" : lecturers.length , "learners" : learners.length, "courses" : courses.length};

      return res.status(200).json({
        statistics: statistics
       });
  } catch (err) {
     res.status(500).json({message: err.message });
  }
};

exports.notice = async (req, res) => {

  try {

    const notices = await AdminNotices.find();

      return res.status(200).json({
        notice: notices[notices.length - 1]
       });
  } catch (err) {
     res.status(500).json({message: err.message });
  }
};




