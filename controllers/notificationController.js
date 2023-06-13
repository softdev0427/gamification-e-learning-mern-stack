
const mongoose = require("mongoose");
const Notifications = mongoose.model("Notifications");
const Loans = mongoose.model("Loans");
const Users = mongoose.model("Users");
const moment = require('moment');

require("dotenv").config({ path: ".variables.env" });

exports.getList = async (req, res) => {

  try {
     let { id} = req.params;

     var Results = await Notifications.find({'viewers': { $not: { $elemMatch: {id: id}} }}).lean();

     const user = await Users.findOne({_id : id}).select("role");
     if(user.role === "learner")
     {
      const borrows = await Loans.findOne({id : id}, {'actions':  { $elemMatch: {borrows: { $gt : 0}}} });
      
      const pending = {borrows : borrows.actions.length};
      Results.push(pending);
     }
     else{
      Results.push({borrows : 0});
     }
    
      return res.status(200).json({
        notifications: Results
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
};

exports.delCourseMiddleware = async (req, res, next) => {

  const {id} = req.params;
  const Results = await Notifications.find({'viewers': { $not: { $elemMatch: {id: id}} }});

  for(var k=0; k<Results.length ; k++)
  {
    if(Results[k].course)
    await Notifications.findOneAndUpdate({ _id:Results[k]._id }, { "$push": { "viewers": { id: id } }}, { safe: true, new: true});
    if(Results[k].announcement)
    await Notifications.findOneAndUpdate({ _id:Results[k]._id }, { "$push": { "viewers": { id: id } }}, { safe: true, new: true});
  }

  next();
};


exports.delAssessMiddleware = async (req, res, next) => {

  const {id} = req.params;
  const Results = await Notifications.find({'viewers': { $not: { $elemMatch: {id: id}} }});

  for(var k=0; k<Results.length ; k++)
  {
    if(Results[k].assessment)
    await Notifications.findOneAndUpdate({ _id:Results[k]._id }, { "$push": { "viewers": { id: id } }}, { safe: true, new: true});
   
  }

  next();
};

