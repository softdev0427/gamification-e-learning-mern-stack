const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const Courses = mongoose.model("Courses");
const Assessments = mongoose.model("Assessments");
const Users = mongoose.model("Users");
const Chats = mongoose.model("Chats");
const Loans = mongoose.model("Loans");
const AdminNotices = mongoose.model("AdminNotices");
const moment = require('moment');
const fs = require('fs');

require("dotenv").config({ path: ".variables.env" });

exports.userlist = async (req, res) => {
try{
  const users = await Users.find();
  return res.status(200).json({
    users:users
  });
}catch (err) {
  res.status(500).json({
    success: false,
    message: err.message,
  });
}
}

exports.allow = async (req, res) => {
  try{
    const {id} = req.params;
    await Users.findOneAndUpdate(
      { _id: id },
      {
        allow:true
      },
      {
        new: true
      }
    );

    const user = await Users.findOne({_id : id});
    const newChat = new Chats({
      email: user.email
    });

    await newChat.save();
    if(user.role == "learner")
    {

      const userlist = await Loans.find().select("id");

      for(var k = 0 ; k < userlist.length ; k++)
      {
        await Loans.findOneAndUpdate({ _id:userlist[k]._id}, { "$push": { "actions": { userid:id } }}, { safe: true, new: true});
      }

      const newLoan = new Loans({
      id : id
      });

      await newLoan.save();

      for(var i = 0 ; i < userlist.length ; i++)
      {
        await Loans.findOneAndUpdate({ id:id}, { "$push": { "actions": { userid:userlist[i].id } }}, { safe: true, new: true});
      }

   }

    const users = await Users.find();
    return res.status(200).json({
      users:users
    });
  }catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
  }

  exports.delete = async (req, res) => {
    try{
      const {id} = req.params;
      const user = await Users.findOne({_id : id});
 
      const courses = await Courses.find({ lecturer: user.email });
  
      for(var k = 0 ; k < courses.length ; k++)
      {
      for(var i=0 ; i<courses[k].origins.length ; i++)
      {
        var direct = 'public/uploads/courses/' + courses[k].origins[i];
        fs.unlinkSync(direct);
        };
        await Assessments.deleteMany({ coursename: courses[k].name });
      }
      
      await Courses.deleteMany({ lecturer: user.email }); 
      await Chats.findOneAndDelete({ email: user.email });
      await Loans.findOneAndDelete({ id: id });

      const userlist = await Loans.find().select("id");

      for(var k = 0 ; k < userlist.length ; k++)
      {
        await Loans.findOneAndUpdate({ _id:userlist[k]._id}, { "$pull": { "actions": { userid:id } }}, { safe: true, new: true});
      }
  
      await Users.findOneAndDelete({ _id: id });
  
      const users = await Users.find();
      return res.status(200).json({
        users:users
      });
    }catch (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
    };

    exports.edit = async (req, res) => {
      try{
        const {id} = req.params;
        const user = await Users.findOne({_id : id});
        return res.status(200).json({
          user:user
        });
      }catch (err) {
        res.status(500).json({
          success: false,
          message: err.message,
        });
      }
      }

      exports.update = async (req, res) => {

        try {
          const {id, location, username, password, wallet } = req.body;

          if(password !=='')
         { const salt = await bcrypt.genSalt();
          const passwordHash = await bcrypt.hash(password, salt);
          await Users.findOneAndUpdate(
            { _id: id },
            { location,
              username,
              wallet,
              password : passwordHash
            },
            {
              new: true
            }
          );
        }
        else{
          await Users.findOneAndUpdate(
            { _id: id },
            { location,
              username,
              wallet
            },
            {
              new: true
            }
          );
        }   
      
            return res.status(200).json({
              message: "Successfully updated."
             });
        } catch (err) {
           res.status(500).json({message: err.message });
        }
      };

  
exports.courselist = async (req, res) => {
  try {

    let courses = await Courses.find().lean();

    if (!courses)
      return res.status(400).json({
        message: "Courses doesn't exist."
      });

      for(var k=0;k<courses.length ; k++)
      {
        const lectName = await Users.findOne({email:courses[k].lecturer});
        courses[k]['lectName'] = lectName.username;
      }

      let assessments = await Assessments.find().lean();
      if (!assessments)
      return res.status(400).json({
        message: "assessments doesn't exist."
      });

      for(var k=0;k<assessments.length ; k++)
      {
        const lectName = await Users.findOne({email:assessments[k].lecturer});
        assessments[k]['lectName'] = lectName.username;
      }

      return res.status(200).json({
        courses,
        assessments
       });

  } catch (err) {
     res.status(500).json({message: err.message });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    const {id} = req.params;
 
    const course = await Courses.findOne({ _id: id });

    
    for(var i=0 ; i<course.origins.length ; i++)
    {
      var direct = 'public/uploads/courses/' + course.origins[i];
      fs.unlinkSync(direct);
      };
    
       await Assessments.deleteMany({ coursename: course.name });

     const dd = await Courses.findOneAndDelete({ _id: id });

     let newCourses = await Courses.find();

      return res.status(200).json({
        message:"Successfully deleted one course!",
        courses:newCourses
       });
  } catch (err) {
     res.status(500).json({message: err.message });
  }
};


exports.deleteAssessment = async (req, res) => {
  try {
    const {id} = req.params;
 
    const assessment = await Assessments.findOne({ _id: id });
  
    if(!assessment)
    {
      let newAssessments = await Assessments.find();
    return res.status(200).json({
      success:false,
      message:"This assessment already deleted! Please refresh this page.",
      assessments:newAssessments
     });
    }
      await Assessments.findOneAndDelete({ _id: id });

     let newAssessments = await Assessments.find()

      return res.status(200).json({
        success:true,
        message:"Successfully deleted one assessment!",
        assessments:newAssessments
       });
  } catch (err) {
     res.status(500).json({message: err.message });
  }
};

exports.pushNotification = async (req, res) => {
  try{
    const {creator, notice} = req.body;

    const newNotice = new AdminNotices({
      creator,
      content : notice
    });

    await newNotice.save();

    return res.status(200).json({
      message:"Successfully saved!"
    });
  }catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
  }