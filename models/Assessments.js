const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const assessmentsSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true
  },
  coursename: {
    type: String,
    required:true
  },
  lecturer: {
    type: String,
    required:true
  },
  learners:[ {
    email:String,
    object:Number,
    written:Number,
    wrianswer:String,
    questionstep:{
      type:Number,
      default:0
    },
    gamescore:{
      type:Number,
      default:0
    },
    wronganswer:{
      type:Number,
      default:0
    },
    correctanswer:{
      type:Number,
      default:0
    },
    skipanswer:{
      type:Number,
      default:0
    },
    streaknum:{
      type:Number,
      default:0
    },
    fiftynum:{
      type:Number,
      default:0
    },
    fiftybuynum:{
      type:Number,
      default:0
    },
    buyvetonum:{
      type:Number,
      default:0
    },
    streakvetonum:{
      type:Number,
      default:0
    },
    restvetonum:{
      type:Number,
      default:0
    }
  }],
  mcquestions:[{
    ques:String,
    ans1:String,
    ans2:String,
    ans3:String,
    ans4:String,
    crt:String
  }],
  essayquestion:{
    type:String,
    default:"There is no question!"
  },
  starttime:{
    type:Date,
    required:true
  },
  dateline:{
    type:Date,
    required:true
  },
  goalnum:{
    type:Number,
    default:0
  },
  rewardsscore:{
    type:Number,
    default:0
  },
  gamificationflag:{
    type:Boolean,
    default:false
  },
  streakflag:{
    type:Boolean,
    default:false
  },
  streakanswer:{
    type:Number,
    default:0
  },
  bonusscore:{
    type:Number,
    default:0
  },
  answerpenalty:{
    type:Boolean,
    default:false
  },
  subtractscore:{
    type:Number,
    default:0
  },
  fiftyflag:{
    type:Boolean,
    default:false
  },
  fiftynum:{
    type:Number,
    default:0
  },
  fiftycost:{
    type:Number,
    default:0
  },
  vetoflag:{
    type:Boolean,
    default:false
  },
  buyvetoflag:{
    type:Boolean,
    default:false
  },
  buyvetonum:{
    type:Number,
    default:0
  },
  buyvetocost:{
    type:Number,
    default:0
  },
  streakvetoflag:{
    type:Boolean,
    default:false
  },
  streakvetounitnum:{
    type:Number,
    default:0
  },
  streakvetomaxnum:{
    type:Number,
    default:0
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model("Assessments", assessmentsSchema);
