
const mongoose = require("mongoose");
const Moonraces = mongoose.model("Moonraces");
const Users = mongoose.model("Users");

require("dotenv").config({ path: ".variables.env" });

exports.create = async (req, res) => {

  try {
     let {course, moonquizname, starttime, endtime, rewardsvn, rewardsfreeze, lecturer} = req.body;


      const newMoonrace = new Moonraces({
        coursename:course,
        name:moonquizname,
        lecturer,
        starttime,
        endtime,
        rewardsvn,
        rewardsfreeze
      });

      await newMoonrace.save();

      return res.status(200).json({
        success:true,
        message:"successfully created! Please edit this Moon quiz!"
      });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.creatMiddleware = async(req,res,next) => {
  let {course, moonquizname } = req.body;
  const before = await Moonraces.findOne({coursename:course, name:moonquizname});
  if(before)
  {
   return res.status(200).json({
     success:false,
     message:"This Moon Quiz name of selected course is already exist! Please choose another name."
   });
  }
  next();
}

exports.edit = async (req, res) => {

  try {
     let { id} = req.params;

     const moonraces = await Moonraces.find({lecturer : id});  

      return res.status(200).json({
        moonraces : moonraces
      });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};


exports.Delete = async (req, res) => {
  try {
    const {id} = req.params;
 
    const assessment = await Moonraces.findOne({ _id: id });
    const beforelecturer = assessment.lecturer;
   

      await Moonraces.findOneAndDelete({ _id: id });

     let newAssessments = await Moonraces.find({lecturer:beforelecturer})

      return res.status(200).json({
        message:"Successfully deleted one moon quiz!",
        moonraces:newAssessments
       });
  } catch (err) {
     res.status(500).json({message: err.message });
  }
};

exports.questionList = async (req, res) => {

  try {
     let {id} = req.params;

     const questions = await Moonraces.findOne({_id : id}).select('questions');  

      return res.status(200).json({
        questions : questions.questions
      });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};


exports.questionSave = async (req, res) => {

  try {
     let {values, assessmentId} = req.body;

     const assessment = await Moonraces.findOne({_id : assessmentId}).select("questions").lean();  
      var beforeQuestion = assessment.questions;

    for(var k = 0 ; k < beforeQuestion.length ; k++)
    {
      if(values.question == beforeQuestion[k].ques)
       {       
          return res.status(200).json({
            success:false,
            message : "This question already exists! Please change to another question."
          });
        }
    }

    const ques = values.question;
    const ans1 = values.ans1;
    const ans2 = values.ans2;
    const ans3 = values.ans3;
    const ans4 = values.ans4;
    var crt = '';

    switch(values.answer){
      case "answer1": { crt = ans1;  break;}
      case "answer2": { crt = ans2;  break;}
      case "answer3": { crt = ans3;  break;}
      case "answer4": { crt = ans4;  break;}
      default:break;
    }

    await Moonraces.findOneAndUpdate({ _id:assessmentId }, { "$push": { "questions": { ques, ans1, ans2, ans3, ans4, crt } }}, { safe: true});

      const questions = await Moonraces.findOne({_id : assessmentId}).select('questions');  

      return res.status(200).json({
        success: true,
        message:"Successfully saved!",
        questions : questions.questions
      });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};



exports.questionDelete = async (req, res) => {

  try {
     let {assessmentId,quesId} = req.body;

     await Moonraces.findOneAndUpdate({ _id:assessmentId }, { "$pull": { "questions": { "_id": quesId } }}, { safe: true});

      const questions = await Moonraces.findOne({_id : assessmentId}).select('questions');  

      return res.status(200).json({
        message:"Successfully deleted!",
        questions : questions.questions
      });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};





exports.editAssess = async (req, res) => {

  try {
     let { id} = req.params;

     const assessment = await Moonraces.findOne({_id : id});  

      return res.status(200).json({
        assessment : assessment
      });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.updateAssess = async (req, res) => {

  try {
     let { id, values} = req.body;
     const {goalnum, starttime, endtime, rewardsvn, rewardsfreeze,
      timeflag, timenumber, timecost, streakflag, streakanswer, streakturbonum, streakcost,
      vetoflag, buyvetoflag, buyvetonum, buyvetocost, streakvetoflag, streakvetounitnum, streakvetomaxnum} = values;

  await Moonraces.findOneAndUpdate(
    { _id: id },
    {
      goalnum,
      starttime,
      endtime,
      rewardsvn,
      rewardsvn,
      rewardsfreeze,
      timeflag,
      timenumber, timecost, streakflag, streakanswer, streakturbonum, streakcost,
      vetoflag, buyvetoflag, buyvetonum, buyvetocost, streakvetoflag, streakvetounitnum, streakvetomaxnum
    },
    {
      new: true
    }
  );

      return res.status(200).json({
        success:true,
        message:"successfully Updated! Please check your moon quiz list!"
      });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getnarrative = async (req, res) => {

  try {
     let {id} = req.params;

     const narratives = await Moonraces.findOne({_id : id}).select('narrative');  

      return res.status(200).json({
        narrative : narratives.narrative
      });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.saveNarrative = async (req, res) => {

  try {
     let { id, narrative} = req.body;

  await Moonraces.findOneAndUpdate(
    { _id: id },
    {
      narrative
    },
    {
      new: true
    }
  );

      return res.status(200).json({
        message:"successfully saved!"
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

    let quizzes = await Moonraces.find().populate({path:"lecturer", select:"username"}).lean();

      return res.status(200).json({
        quizzes:quizzes
       });

  } catch (err) {
     res.status(500).json({message: err.message });
  }
};


exports.getNarrative = async (req, res) => {

  try {
     let { Id} = req.body;

     const assessment = await Moonraces.findOne({_id : Id});  

      return res.status(200).json({
        moonquiz : assessment
      });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};


exports.getStart = async (req, res) => {

  try {
     let { Id, userId} = req.body;


     const learner = await Moonraces.exists({_id : Id, 'learners':  { $elemMatch: {id: userId}} });

     if(!learner)
     {
      await Moonraces.findOneAndUpdate({ _id:Id }, { "$push": { "learners": { id: userId} }}, { new: true});
     }

     const assessment = await Moonraces.findOne({_id : Id}).populate({path : "learners.id", select : ["username", "shuttle"]});  

      return res.status(200).json({
        moonquiz : assessment
      });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.nextStep = async (req, res) => {

  try {
     let { Id, userId, correct} = req.body;

     const me = await Moonraces.findOne({_id : Id}, {  'learners':  { $elemMatch: {id: userId}} });
     const race = await Moonraces.findOne({_id : Id});


     if(!correct)
     {
      await Moonraces.findOneAndUpdate(
        {_id: Id},
        {$set: {"learners.$[el].streaknum": 0, "learners.$[el].questionstep": me.learners[0].questionstep +1} },
        { 
          arrayFilters: [{ "el.id": userId }],
          new: true
        }
      );
    }
    else{

      if(race.vetoflag && race.streakvetoflag && ((me.learners[0].streaknum + 1) % race.streakvetounitnum == 0)){
        if(race.streakvetomaxnum > me.learners[0].vetonum)
          await Moonraces.findOneAndUpdate(
            {_id: Id},
            {$set: {"learners.$[el].vetonum": me.learners[0].vetonum + 1} },
            { 
              arrayFilters: [{ "el.id": userId }],
              new: true
            }
          );
      }

      if(me.learners[0].streakflag && ((me.learners[0].streaknum + 1) % race.streakanswer == 0))
       {
         await Moonraces.findOneAndUpdate(
          {_id: Id},
          {$set: {"learners.$[el].correctanswernum": me.learners[0].correctanswernum + 2, "learners.$[el].streakturbonum": me.learners[0].streakturbonum +1} },
          { 
            arrayFilters: [{ "el.id": userId }],
            new: true
          }
        );

        const wallet = await Moonraces.findOne({_id : Id}, {  'learners':  { $elemMatch: {id: userId}} }).populate({path : "learners.id", select : ['wallet','totalSpending']});
          if((wallet.learners[0].id.wallet < race.streakcost) || wallet.learners[0].streakturbonum >= race.streakturbonum)
            await Moonraces.findOneAndUpdate(
              {_id: Id},
              {$set: {"learners.$[el].streakflag": false} },
              { 
                arrayFilters: [{ "el.id": userId }],
                new: true
              }
            );
          else{
            await Users.findOneAndUpdate(
              {_id: userId},
              {wallet:wallet.learners[0].id.wallet - race.streakcost, totalSpending: wallet.learners[0].id.totalSpending + race.streakcost },
              { 
                new: true
              }
            );
          }


      }
      else{
        await Moonraces.findOneAndUpdate(
          {_id: Id},
          {$set: {"learners.$[el].correctanswernum": me.learners[0].correctanswernum + 1} },
          { 
            arrayFilters: [{ "el.id": userId }],
            new: true
          }
        );
        }

        await Moonraces.findOneAndUpdate(
          {_id: Id},
          {$set: {"learners.$[el].streaknum":  me.learners[0].streaknum +1, "learners.$[el].questionstep": me.learners[0].questionstep +1} },
          { 
            arrayFilters: [{ "el.id": userId }],
            new: true
          }
        );

    }


    const compare = await Moonraces.findOne({_id : Id}, {  'learners':  { $elemMatch: {id: userId}} }).populate({path : "learners.id", select : ['wallet','freeze']});
    if(compare.learners[0].correctanswernum >= race.goalnum)
    {
      await Users.findOneAndUpdate(
        {_id: userId},
        {wallet:compare.learners[0].id.wallet + race.rewardsvn, freeze: compare.learners[0].id.freeze + race.rewardsfreeze },
        { 
          new: true
        }
      );
    }

     const assessment = await Moonraces.findOne({_id : Id}).populate({path : "learners.id", select : ["username", "shuttle"]}); 
     

      return res.status(200).json({
        moonquiz : assessment
      });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.buytime = async (req, res) => {

  try {
     let { Id, userId} = req.body;

     const me = await Moonraces.findOne({_id : Id}, {  'learners':  { $elemMatch: {id: userId}} });
     const race = await Moonraces.findOne({_id : Id});


     if(race.timeflag)
     {
      await Moonraces.findOneAndUpdate(
        {_id: Id},
        {$set: {"learners.$[el].buytimenum": me.learners[0].buytimenum +1} },
        { 
          arrayFilters: [{ "el.id": userId }],
          new: true
        }
      );

      const wallet = await Users.findOne({_id:userId}).select(["wallet", "totalSpending"]);


        await Users.findOneAndUpdate(
          {_id: userId},
          {wallet:wallet.wallet - race.timecost, totalSpending: wallet.totalSpending + race.timecost },
          { 
            new: true
          }
        );

      }


     const assessment = await Moonraces.findOne({_id : Id}).populate({path : "learners.id", select : ["username", "shuttle"]}); 
     

      return res.status(200).json({
        moonquiz : assessment
      });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.streakenable = async (req, res) => {

  try {
     let { Id, userId, flag} = req.body;

     const race = await Moonraces.findOne({_id : Id});

      await Moonraces.findOneAndUpdate(
        {_id: Id},
        {$set: {"learners.$[el].streakflag": flag, "learners.$[el].streaknum": 0} },
        { 
          arrayFilters: [{ "el.id": userId }],
          new: true
        }
      );

      const wallet = await Users.findOne({_id:userId}).select(["wallet", "totalSpending"]);


        await Users.findOneAndUpdate(
          {_id: userId},
          {wallet:wallet.wallet - race.streakcost, totalSpending: wallet.totalSpending + race.streakcost },
          { 
            new: true
          }
        );


     const assessment = await Moonraces.findOne({_id : Id}).populate({path : "learners.id", select : ["username", "shuttle"]}); 
     

      return res.status(200).json({
        moonquiz : assessment
      });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.buyVetoBoost = async (req, res) => {

  try {
     let { Id, userId} = req.body;

     const me = await Moonraces.findOne({_id : Id}, {  'learners':  { $elemMatch: {id: userId}} });
     const race = await Moonraces.findOne({_id : Id});

      await Moonraces.findOneAndUpdate(
        {_id: Id},
        {$set: {"learners.$[el].buyvetonum": me.learners[0].buyvetonum +1, "learners.$[el].vetonum": me.learners[0].vetonum +1} },
        { 
          arrayFilters: [{ "el.id": userId }],
          new: true
        }
      );

      const wallet = await Users.findOne({_id:userId}).select(["wallet", "totalSpending"]);


        await Users.findOneAndUpdate(
          {_id: userId},
          {wallet:wallet.wallet - race.buyvetocost, totalSpending: wallet.totalSpending + race.buyvetocost },
          { 
            new: true
          }
        );


     const assessment = await Moonraces.findOne({_id : Id}).populate({path : "learners.id", select : ["username", "shuttle"]}); 
     

      return res.status(200).json({
        moonquiz : assessment
      });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.useveto = async (req, res) => {

  try {
     let { Id, userId} = req.body;

     const me = await Moonraces.findOne({_id : Id}, {  'learners':  { $elemMatch: {id: userId}} });

      await Moonraces.findOneAndUpdate(
        {_id: Id},
        {$set: {"learners.$[el].vetonum": me.learners[0].vetonum - 1} },
        { 
          arrayFilters: [{ "el.id": userId }],
          new: true
        }
      );

     const assessment = await Moonraces.findOne({_id : Id}).populate({path : "learners.id", select : ["username", "shuttle"]}); 
     

      return res.status(200).json({
        moonquiz : assessment
      });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};



