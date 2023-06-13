const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const moonracesSchema = new mongoose.Schema({
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
    required:true,
    ref:"Users"
  },
  learners:[ {
    id:{ type:String, ref:"Users"},
    questionstep:{
      type:Number,
      default:0
    },
    correctanswernum:{
      type:Number,
      default:0
    },
    buytimenum:{
      type:Number,
      default:0
    },
    streakflag:{
      type:Boolean,
      default:false
    },
    streaknum:{
      type:Number,
      default:0
    },
    streakturbonum:{
      type:Number,
      default:0
    },
    buyvetonum:{
      type:Number,
      default:0
    },
    vetonum:{
      type:Number,
      default:0
    },

  }],
  questions:[{
    ques:String,
    ans1:String,
    ans2:String,
    ans3:String,
    ans4:String,
    crt:String
  }],
  starttime:{
    type:Date,
    required:true
  },
  endtime:{
    type:Date,
    required:true
  },
  goalnum:{
    type:Number,
    default:0
  },
  rewardsvn:{
    type:Number,
    default:0
  },
  rewardsfreeze:{
    type:Number,
    default:0
  },
  narrative:{
    type:String,
    default:"<p>There is no narrative text.</p>"
  },
  timeflag:{
    type:Boolean,
    default:false
  },
  timenumber:{
    type:Number,
    default:0
  },
  timecost:{
    type:Number,
    default:0
  },
  streakflag:{
    type:Boolean,
    default:false
  },
  streakanswer:{
    type:Number,
    default:0
  },
  streakturbonum:{
    type:Number,
    default:0
  },
  streakcost:{
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

module.exports = mongoose.model("Moonraces", moonracesSchema);
