const mongoose = require("mongoose");
const moment = require('moment');
mongoose.Promise = global.Promise;

const loanSchema = new mongoose.Schema({
  id: {
    type: String,
    required:true,
    ref:"Users"
  },
  actions : [{
    userid : {
      type: String,
      required : true,
      ref:"Users"
    },
    loans : {
      type : Number,
      default : 0
    },
    borrows : {
      type : Number,
      default : 0
    },
    gifts : {
      type : Number,
      default : 0
    },
    receives : {
      type : Number,
      default : 0
    },
    sendGiftReq : {
      type : Number,
      default : 0
    },
    sendLoanReq : {
      type : Number,
      default : 0
    },
    getGiftReq : {
      type : Number,
      default : 0
    },
    getLoanReq : {
      type : Number,
      default : 0
    }
  }],
  loanallow:{
    type:Date,
    default:moment().subtract(24, 'hours').toDate().getTime(),
  },
  giftallow:{
    type:Date,
    default:moment().subtract(24, 'hours').toDate().getTime()
  }
});

module.exports = mongoose.model("Loans", loanSchema);
