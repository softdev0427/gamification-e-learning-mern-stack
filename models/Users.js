const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const bcrypt = require("bcryptjs");
const moment = require('moment');


const usersSchema = new Schema({
  username: { type: String, required: true },
  avatar: {
    type: String,
    default:'/static/images/avatars/avat1.jpg'
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
 
  location: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now
  },
  role: {
    type: String,
    required: true
  },
  allow: {
    type: Boolean,
    default:false
  },
  wallet:{type:Number, default:0},
  totalSpending:{type:Number, default:0},
  streaks:{
    type:Number,
    default:1
  },
  freeze:{
    type:Number,
    default:0
  },
  login:{
    type:Date,
    default:Date.now
  },
  spin:{
    type:Date,
    default:moment().subtract(24, 'hours').toDate().getTime()
  },
  shuttle:{
    type:String,
    default:'/static/images/moonQuiz/avatar/basic.jpg'
  }
});

// generating a hash
usersSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(), null);
};

// checking if password is valid
usersSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("Users", usersSchema);
