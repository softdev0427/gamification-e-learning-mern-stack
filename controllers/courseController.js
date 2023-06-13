
const mongoose = require("mongoose");
const Courses = mongoose.model("Courses");
const fs = require('fs');
const Users = mongoose.model("Users");
const Assessments = mongoose.model("Assessments");
const Notifications = mongoose.model("Notifications");
const {v4} = require('uuid');

require("dotenv").config({ path: ".variables.env" });

exports.create = async (req, res) => {

  try {
     let {name, curriculum, overview, lecturer} = req.headers;
     let files = [];
     let origins = [];
     const url = req.protocol + '://' + req.get('host');
     for (var i = 0; i < req.files.length; i++) {
      files.push(url + "/uploads/courses/" + req.files[i].filename);
      origins.push(req.files[i].filename)
  }

      const newCourse = new Courses({
        name,
        curriculum,
        overview,
        origins,
        files,
        lecturer
      });

      await newCourse.save();

      const creator = await Users.findOne({email:lecturer});

      const newNotification = new Notifications({
        creator:creator._id,
        course:name
      });

      await newNotification.save();

      return res.status(200).json({
        success:true,
        message:"successfully Saved! Please check your course list!"
      });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.creatMiddleware = async(req,res,next) => {
  let {name} = req.headers;
  const before = await Courses.findOne({name:name});
  if(before)
  {
   return res.status(200).json({
     success:false,
     message:"This course name is already exist! Please choose another name."
   });
  }
  next();
}

exports.take = async (req, res) => {

  try {
     let { courseId} = req.body;

     const course = await Courses.findOne({_id : courseId});  

      return res.status(200).json({
        course : course
      });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.enroll = async (req, res) => {

  try {
     let {learner, courseId} = req.body;
     var beforeLearner = [];

     const course = await Courses.findOne({_id : courseId});  
      beforeLearner = course.learners;

    for(var k = 0 ; k < beforeLearner.length ; k++)
    {
      if(learner == beforeLearner[k])
       {       
          return res.status(200).json({
            success:false,
            message : "You are already enrolled!"
          });
        }
    }

       beforeLearner.push(learner);
   
      await Courses.findOneAndUpdate(
        { _id: courseId },
        { learners: beforeLearner },
        {
          new: true
        }
      );

      return res.status(200).json({
        success: true,
        message : "Successfully enrolled!"
      });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};


exports.pushreview = async (req, res) => {

  try {
     let {learner, courseId, review} = req.body;

     const course = await Courses.findOne({_id : courseId});  

      var beforeReview = course.review;

      beforeReview.push({'id':v4(), review, learner})

   
      await Courses.findOneAndUpdate(
        { _id: courseId },
        { review: beforeReview },
        {
          new: true
        }
      );

      return res.status(200).json({
        message : "Successfully saved!"
      });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};




exports.list = async (req, res) => {
  try {

    let courses = await Courses.find().lean();

    if (!courses)
      return res.status(400).json({
        message: "Courses doesn't exist."
      });

      for(var k = 0 ; k<courses.length ; k++)
      {
        var user = await Users.findOne({email:courses[k].lecturer});
        lectName = user.username;
        courses[k]['lectName'] = lectName;
      }
      return res.status(200).json({
        courses:courses
       });

  } catch (err) {
     res.status(500).json({message: err.message });
  }
};


exports.ownCourses = async (req, res) => {
  try {
    const lecturer = req.params.email

    let courses = await Courses.find({lecturer:lecturer});

    if (!courses)
      return res.status(400).json({
        message: "Courses doesn't exist."
      });

      return res.status(200).json({
        courses:courses
       });

  } catch (err) {
     res.status(500).json({message: err.message });
  }
};


exports.deleteFile = async (req, res) => {
  try {
    const {file, courseId} = req.body;

    const course = await Courses.findOne({ _id: courseId });
    var n = 0;

    
    for(var i=0 ; i<=course.files.length ; i++)
    {
      if(file == course.files[i])
        n = i ;
    }


    var direct = 'public/uploads/courses/' + course.origins[n];

      fs.unlinkSync(direct);

       course.origins.splice(n, 1);
       course.files.splice(n,1);

      await Courses.findOneAndUpdate(
        { _id: courseId },
        {
          origins:course.origins,
          files:course.files     
        },
        {
          new: true
        }
      );
      const newCourse = await Courses.findOne({ _id: courseId });

      return res.status(200).json({
        newFile:newCourse.files,
        message:"successfully deleted!"
       });
  } catch (err) {
     res.status(500).json({message: err.message });
  }
};

exports.update = async (req, res) => {

  try {
     let { curriculum, overview, courseid} = req.headers;
     const course = await Courses.findOne({ _id: courseid });     
     const url = req.protocol + '://' + req.get('host');

     for (var i = 0; i < req.files.length; i++) {
      course.files.push(url + "/uploads/courses/" + req.files[i].filename);
      course.origins.push(req.files[i].filename)
     }


  await Courses.findOneAndUpdate(
    { _id: courseid },
    {
      curriculum,
      overview,
      origins:course.origins,
      files:course.files
    },
    {
      new: true
    }
  );

      return res.status(200).json({
        success:true,
        message:"successfully Edited! Please check your course list!"
      });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.newAnnouncement = async (req, res) => {

  try {
     let { announcement, courseId} = req.body;    

  await Courses.findOneAndUpdate(
    { _id: courseId },
    {
      announcements:announcement
    },
    {
      new: true
    }
  );

  const CourseInfo = await Courses.findOne({_id: courseId});
  const creator = await Users.findOne({email:CourseInfo.lecturer});

  const newNotification = new Notifications({
    creator:creator._id,
    announcement:CourseInfo.name,
  });

  await newNotification.save();

      return res.status(200).json({
        success:true,
        message:"successfully saved!"
      });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};



exports.deleteCourse = async (req, res) => {
  try {
    const {courseId} = req.params;
 
    const course = await Courses.findOne({ _id: courseId });
    const beforelecturer = course.lecturer;

    
    for(var i=0 ; i<course.origins.length ; i++)
    {
      var direct = 'public/uploads/courses/' + course.origins[i];
      fs.unlinkSync(direct);
      };
    
       await Assessments.deleteMany({ coursename: course.name });

     const dd = await Courses.findOneAndDelete({ _id: courseId });



     let newCourses = await Courses.find({lecturer:beforelecturer});

      return res.status(200).json({
        message:"Successfully deleted one course!",
        courses:newCourses
       });
  } catch (err) {
     res.status(500).json({message: err.message });
  }
};


