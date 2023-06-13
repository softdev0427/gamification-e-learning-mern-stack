
const mongoose = require("mongoose");
const Courses = mongoose.model("Courses");
const Assessments = mongoose.model("Assessments");
const Users = mongoose.model("Users");
const Notifications = mongoose.model("Notifications");

require("dotenv").config({ path: ".variables.env" });

exports.create = async (req, res) => {

  try {
     let {course, assessmentname, starttime, dateline, lecturer} = req.body;
 

      const newAssessment = new Assessments({
        coursename:course,
        name:assessmentname,
        starttime,
        dateline,
        lecturer
      });

      await newAssessment.save();

      const creator = await Users.findOne({email:lecturer});

      const newNotification = new Notifications({
        creator:creator._id,
        assessment:{course, name:assessmentname}
      });

      await newNotification.save();

      return res.status(200).json({
        success:true,
        message:"successfully created! Please push multi-choice questions!"
      });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.creatMiddleware = async(req,res,next) => {
  let {course, assessmentname } = req.body;
  const before = await Assessments.findOne({coursename:course, name:assessmentname});
  if(before)
  {
   return res.status(200).json({
     success:false,
     message:"This Assessment name of selected course is already exist! Please choose another name."
   });
  }
  next();
}


exports.list = async (req, res) => {
  try {

    let assessments = await Assessments.find().lean();

    if (!assessments)
      return res.status(400).json({
        message: "Assessments don't exist."
      });

      for(var k = 0 ; k<assessments.length ; k++)
      {
        var user = await Users.findOne({email:assessments[k].lecturer});
        lectName = user.username;
        assessments[k]['lectName'] = lectName;
      }
      return res.status(200).json({
        assessments:assessments
       });

  } catch (err) {
     res.status(500).json({message: err.message });
  }
};

exports.edit = async (req, res) => {

  try {
     let { email} = req.params;

     const assessments = await Assessments.find({lecturer : email}).lean();  
     var object = [], written = [], wrianswer = [];

     for(var k = 0; k < assessments.length ; k++)
     {
      object[k]=0; written[k] = 0; wrianswer[k]=0;
      for(var i = 0; i < assessments[k].learners.length; i++)
      {
       if( assessments[k].learners[i].object>=0)
          object[k] += 1;
        if( assessments[k].learners[i].written>0)
           written[k] += 1;
        if(assessments[k].learners[i].wrianswer)
          wrianswer[k] +=1;
      }
      assessments[k]['object'] = object[k];
      assessments[k]['written'] = written[k];
      assessments[k]['wrianswer'] = wrianswer[k];
     }


      return res.status(200).json({
        assessments : assessments
      });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.questionList = async (req, res) => {

  try {
     let {id} = req.params;

     const questions = await Assessments.findOne({_id : id}).select('mcquestions');  

      return res.status(200).json({
        questions : questions.mcquestions
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

     const assessment = await Assessments.findOne({_id : assessmentId});  
      var beforeQuestion = assessment.mcquestions;

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
    switch(values.answer)
    {
      case 'answer1': {crt = ans1; break;}
      case 'answer2': {crt = ans2; break;}
      case 'answer3': {crt = ans3; break;}
      case 'answer4': {crt = ans4; break;}
      default: break;
    }


    beforeQuestion.push({ques, ans1, ans2, ans3, ans4, crt });
   
      await Assessments.findOneAndUpdate(
        { _id: assessmentId },
        { mcquestions: beforeQuestion },
        {
          new: true
        }
      );

      const questions = await Assessments.findOne({_id : assessmentId}).select('mcquestions');  

      return res.status(200).json({
        success: true,
        message:"Successfully saved!",
        questions : questions.mcquestions
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

     await Assessments.findOneAndUpdate({ _id:assessmentId }, { "$pull": { "mcquestions": { "_id": quesId } }}, { safe: true});

      const questions = await Assessments.findOne({_id : assessmentId}).select('mcquestions');  

      return res.status(200).json({
        message:"Successfully deleted!",
        questions : questions.mcquestions
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
 
    const assessment = await Assessments.findOne({ _id: id });
    const beforelecturer = assessment.lecturer;
   

      await Assessments.findOneAndDelete({ _id: id });

     let newAssessments = await Assessments.find({lecturer:beforelecturer})

      return res.status(200).json({
        message:"Successfully deleted one assessment!",
        assessments:newAssessments
       });
  } catch (err) {
     res.status(500).json({message: err.message });
  }
};

exports.editAssess = async (req, res) => {

  try {
     let { id} = req.params;

     const assessment = await Assessments.findOne({_id : id});  

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
     let { id, essay, starttime, dateline} = req.body;

  await Assessments.findOneAndUpdate(
    { _id: id },
    {
      essayquestion:essay,
      starttime,
      dateline
    },
    {
      new: true
    }
  );

      return res.status(200).json({
        success:true,
        message:"successfully Updated! Please check your assessments list!"
      });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};


exports.editquiz = async (req, res) => {

  try {
     let { id} = req.params;

     const assessment = await Assessments.findOne({_id : id});  

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

exports.updateGamification = async (req, res) => {

  try {

     let { id, values} = req.body;
     const {goalnum, starttime, endtime, rewardsscore, gamificationflag, streakflag, streakanswer, bonusscore, answerpenalty,
      subtractscore, fiftyflag, fiftynum, fiftycost,
      vetoflag, buyvetoflag, buyvetonum, buyvetocost, streakvetoflag, streakvetounitnum, streakvetomaxnum} = values;

  await Assessments.findOneAndUpdate(
    { _id: id },
    {
      goalnum,
      starttime,
      dateline: endtime,
      rewardsscore, gamificationflag, streakflag, streakanswer,bonusscore, answerpenalty,
      subtractscore, fiftyflag, fiftynum, fiftycost,
      vetoflag, buyvetoflag, buyvetonum, buyvetocost, streakvetoflag, streakvetounitnum, streakvetomaxnum
    },
    {
      new: true
    }
  );

      return res.status(200).json({
        success:true,
        message:"successfully Updated!"
      });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};


exports.getDateline = async (req, res) => {

  try {
     let { Id, learner} = req.body;

     const assessment = await Assessments.findOne({_id : Id});  
     const coursename = assessment.coursename;
     const enroll = await Courses.findOne({name:coursename});

     var flag = false;

     for(var k = 0 ; k<enroll.learners.length ; k++)
     {
      if(enroll.learners[k] == learner)
        { flag = true; break;}
     }

      return res.status(200).json({
        dateline : assessment.dateline,
        starttime:assessment.starttime,
        gamificationflag:assessment.gamificationflag,
        flag
      });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getScoreObj = async (req, res) => {

  try {
     let { assessId, learner} = req.body;

     const assessment = await Assessments.findOne({_id : assessId, learners: { $elemMatch: { email: learner, object: { $gt: 0 } } }}); 
     const assessmentWri = await Assessments.findOne({_id : assessId, learners: { $elemMatch: { email: learner } }}); 

     if(assessment === null)
     {
      const newAssess = await Assessments.findOne({_id:assessId}).lean();
      const newQuestions = newAssess.mcquestions;

      for(var k=0; k<newQuestions.length ; k++)
      {
        newQuestions[k]['selection'] = "";
      }
      if(assessmentWri === null)
      {await Assessments.findOneAndUpdate({ _id:assessId }, { "$push": { "learners": { email: learner, object:0 } }}, { safe: true, new: true});}
      else{
        await Assessments.findOneAndUpdate(
          {_id: assessId},
          {$set: {"learners.$[el].object": 0 } },
          { 
            arrayFilters: [{ "el.email": learner }],
            new: true
          }
        );
      }

       return res.status(200).json({
        flag : false,
        questions: newQuestions
      });
     }
     else {
      return res.status(200).json({
        flag : true,
        questions:[]
      });
     }    
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
};


exports.pushScoreObj = async (req, res) => {

  try {
     let { assessId, learner, score} = req.body;


     await Assessments.findOneAndUpdate(
      {_id: assessId},
      {$set: {"learners.$[el].object": score } },
      { 
        arrayFilters: [{ "el.email": learner }],
        new: true
      }
    );

       return res.status(200).json({
        message: "Successfully finished! Please check your score."
      });
   
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
};


exports.getScoreWri = async (req, res) => {

  try {
     let { assessId, learner} = req.body;

     const assessment = await Assessments.findOne({_id : assessId, learners: { $elemMatch: { email: learner, written: { $gt:-0.1 } } }}); 
     const assessmentObj = await Assessments.findOne({_id : assessId, learners: { $elemMatch: { email: learner } }}); 

     if(assessment === null)
     {
      const newAssess = await Assessments.findOne({_id:assessId});
      const newQuestion = newAssess.essayquestion;

      if(assessmentObj === null)
      {await Assessments.findOneAndUpdate({ _id:assessId }, { "$push": { "learners": { email: learner, written:0 } }}, { safe: true, new: true});}
      else{
        await Assessments.findOneAndUpdate(
          {_id: assessId},
          {$set: {"learners.$[el].written": 0 } },
          { 
            arrayFilters: [{ "el.email": learner }],
            new: true
          }
        );
      }

       return res.status(200).json({
        flag : false,
        question: newQuestion
      });
     }
     else {
      return res.status(200).json({
        flag : true,
        question:[]
      });
     }    
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
};


exports.pushScoreWri = async (req, res) => {

  try {
     let { assessId, learner, content} = req.body;


     await Assessments.findOneAndUpdate(
      {_id: assessId},
      {$set: {"learners.$[el].wrianswer": content } },
      { 
        arrayFilters: [{ "el.email": learner }],
        new: true
      }
    );

       return res.status(200).json({
        message: "Successfully finished!"
      });
   
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
};


exports.getScore = async (req, res) => {
  try {

    const {id} = req.params;

    let assessment = await Assessments.findOne({_id : id}).lean();
    var learners = assessment.learners;

      for(var k = 0 ; k<learners.length ; k++)
      {
        const user = await Users.findOne({email:assessment.learners[k].email});
        learnName = user.username;
        learners[k]['learnName'] = learnName;
      }

      return res.status(200).json({
        score:learners
       });

  } catch (err) {
     res.status(500).json({message: err.message });
  }
};

exports.pushScore = async (req, res) => {

  try {
     let { score, assessmentId, learnerId} = req.body;

     await Assessments.findOneAndUpdate(
      {_id: assessmentId},
      {$set: {"learners.$[el].written": score } },
      { 
        arrayFilters: [{ "el._id": learnerId }],
        new: true
      }
    );

    let assessment = await Assessments.findOne({_id : assessmentId}).lean();
    var learners = assessment.learners;

      for(var k = 0 ; k<learners.length ; k++)
      {
        const user = await Users.findOne({email:assessment.learners[k].email});
        learnName = user.username;
        learners[k]['learnName'] = learnName;
      }

       return res.status(200).json({
        message: "Successfully saved!",
        score:learners
      });
   
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
};


exports.myScores = async (req, res) => {
  try {

    const {email} = req.params;

    let assessments = await Assessments.find({learners: { $elemMatch: { email: email } }}).lean();

    

      for(var k = 0 ; k<assessments.length ; k++)
      {
        const user = await Users.findOne({email:assessments[k].lecturer});
        assessments[k]['lectName'] = user.username;

        for(var i = 0; i< assessments[k].learners.length ; i++)
        {
          if(assessments[k].learners[i].email == email)
          {
            assessments[k]['obj'] = assessments[k].learners[i].object;
            assessments[k]['wri'] = assessments[k].learners[i].written;
          }
        }
      }
     

      return res.status(200).json({
        assessments:assessments
       });

  } catch (err) {
     res.status(500).json({message: err.message });
  }
};


exports.gameStart = async (req, res) => {

  try {

     let { Id, userEmail} = req.body;


     const learner = await Assessments.exists({_id : Id, 'learners':  { $elemMatch: {email: userEmail}} });

     if(!learner)
     {
      await Assessments.findOneAndUpdate({ _id:Id }, { "$push": { "learners": { email: userEmail} }}, { new: true});
     }

     const assessment = await Assessments.findOne({_id : Id});;  

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
     let { Id, userEmail, correct} = req.body;


     const me = await Assessments.findOne({_id : Id}, {  'learners':  { $elemMatch: {email: userEmail}} });
     const race = await Assessments.findOne({_id : Id});

     if(!correct)
     {

    if(race.answerpenalty)
    {
      await Assessments.findOneAndUpdate(
        {_id: Id},
        {$set: {"learners.$[el].streaknum": 0, "learners.$[el].questionstep": me.learners[0].questionstep +1, "learners.$[el].wronganswer" : me.learners[0].wronganswer + 1, "learners.$[el].gamescore" : me.learners[0].gamescore -race.subtractscore} },
        { 
          arrayFilters: [{ "el.email": userEmail }],
          new: true
        }
      );
    }
    else{
      await Assessments.findOneAndUpdate(
        {_id: Id},
        {$set: {"learners.$[el].streaknum": 0, "learners.$[el].questionstep": me.learners[0].questionstep +1, "learners.$[el].wronganswer" : me.learners[0].wronganswer + 1} },
        { 
          arrayFilters: [{ "el.email": userEmail }],
          new: true
        }
      );
    }

    }
    else{

      if(race.vetoflag && race.streakvetoflag && ((me.learners[0].streaknum + 1) % race.streakvetounitnum == 0)){

        if(race.streakvetomaxnum > me.learners[0].streakvetonum)
          await Assessments.findOneAndUpdate(
            {_id: Id},
            {$set: {"learners.$[el].restvetonum": me.learners[0].restvetonum + 1, "learners.$[el].streakvetonum": me.learners[0].streakvetonum + 1} },
            { 
              arrayFilters: [{ "el.email": userEmail }],
              new: true
            }
          );
      }

      if(race.streakflag && ((me.learners[0].streaknum + 1) % race.streakanswer == 0))
       {
         await Assessments.findOneAndUpdate(
          {_id: Id},
          {$set: {"learners.$[el].gamescore": me.learners[0].gamescore + race.rewardsscore + race.bonusscore} },
          { 
            arrayFilters: [{ "el.email": userEmail }],
            new: true
          }
        );
      }
      else{
        await Assessments.findOneAndUpdate(
          {_id: Id},
          {$set: {"learners.$[el].gamescore": me.learners[0].gamescore +  race.rewardsscore} },
          { 
            arrayFilters: [{ "el.email": userEmail }],
            new: true
          }
        );
        }

        await Assessments.findOneAndUpdate(
          {_id: Id},
          {$set: {"learners.$[el].streaknum":  me.learners[0].streaknum +1, "learners.$[el].questionstep": me.learners[0].questionstep +1, "learners.$[el].correctanswer": me.learners[0].correctanswer +1} },
          { 
            arrayFilters: [{ "el.email": userEmail }],
            new: true
          }
        );

    }

     const assessment = await Assessments.findOne({_id : Id}); 
     

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

exports.buyfifty = async (req, res) => {

  try {
     let { Id, email} = req.body;

     const me = await Assessments.findOne({_id : Id}, {  'learners':  { $elemMatch: {email: email}} });
     const race = await Assessments.findOne({_id : Id});


     if(race.fiftyflag)
     {
      await Assessments.findOneAndUpdate(
        {_id: Id},
        {$set: {"learners.$[el].fiftybuynum": me.learners[0].fiftybuynum +1, "learners.$[el].fiftynum": me.learners[0].fiftynum +1} },
        { 
          arrayFilters: [{ "el.email": email }],
          new: true
        }
      );

      const wallet = await Users.findOne({email:email}).select(["wallet", "totalSpending"]);


        await Users.findOneAndUpdate(
          {email: email},
          {wallet:wallet.wallet - race.fiftycost, totalSpending: wallet.totalSpending + race.fiftycost },
          { 
            new: true
          }
        );

      }


     const assessment = await Assessments.findOne({_id : Id}); 
     

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

exports.usefifty = async (req, res) => {

  try {
     let { Id, email} = req.body;

     const me = await Assessments.findOne({_id : Id}, {  'learners':  { $elemMatch: {email: email}} });

      await Assessments.findOneAndUpdate(
        {_id: Id},
        {$set: {"learners.$[el].fiftynum": me.learners[0].fiftynum - 1} },
        { 
          arrayFilters: [{ "el.email": email }],
          new: true
        }
      );

     const assessment = await Assessments.findOne({_id : Id}); 
     

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

exports.buyVetoPower = async (req, res) => {

  try {
     let { Id, email} = req.body;

     const me = await Assessments.findOne({_id : Id}, {  'learners':  { $elemMatch: {email: email}} });
     const race = await Assessments.findOne({_id : Id});

      await Assessments.findOneAndUpdate(
        {_id: Id},
        {$set: {"learners.$[el].buyvetonum": me.learners[0].buyvetonum +1, "learners.$[el].restvetonum": me.learners[0].restvetonum +1} },
        { 
          arrayFilters: [{ "el.email": email }],
          new: true
        }
      );

      const wallet = await Users.findOne({email:email}).select(["wallet", "totalSpending"]);


        await Users.findOneAndUpdate(
          {email: email},
          {wallet:wallet.wallet - race.buyvetocost, totalSpending: wallet.totalSpending + race.buyvetocost },
          { 
            new: true
          }
        );


     const assessment = await Assessments.findOne({_id : Id});
     

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
     let { Id, email} = req.body;

     const me = await Assessments.findOne({_id : Id}, {  'learners':  { $elemMatch: {email: email}} });

      await Assessments.findOneAndUpdate(
        {_id: Id},
        {$set: {"learners.$[el].restvetonum": me.learners[0].restvetonum - 1} },
        { 
          arrayFilters: [{ "el.email": email }],
          new: true
        }
      );

     const assessment = await Assessments.findOne({_id : Id}); 
     

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


exports.skip = async (req, res) => {

  try {
     let { Id, email} = req.body;

     const me = await Assessments.findOne({_id : Id}, {  'learners':  { $elemMatch: {email: email}} });

      await Assessments.findOneAndUpdate(
        {_id: Id},
        {$set: {"learners.$[el].skipanswer": me.learners[0].skipanswer + 1, "learners.$[el].questionstep": me.learners[0].questionstep + 1} },
        { 
          arrayFilters: [{ "el.email": email }],
          new: true
        }
      );

     const assessment = await Assessments.findOne({_id : Id}); 
     

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

