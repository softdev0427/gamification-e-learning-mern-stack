const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const mongoose = require("mongoose");

const Users = mongoose.model("Users");
const Chats = mongoose.model("Chats");
const Loans = mongoose.model("Loans");

const { catchErrors } = require("../handlers/errorHandlers");
const {
  isValidToken,
  login,
  register,
  streakFreeze
} = require("../controllers/authController");

const admin = {
    avatar: process.env.BASEURL + process.env.PORT + '/uploads/admin/me.png',
    email: 'admin@demo.com',
    username: 'Divine Xavi',
    password: 'admin',
    role: 'admin',
    location: 'Malaysia',
    allow:true,
    wallet:"10000"
};


////////////////////////////   initialing first by admin ///////////
const init = async (initialAdmin) => {

    let { email, password, username, avatar, role, location, allow, wallet } = initialAdmin;

    const existingAdmin = await Users.findOne({ role: role });
    if (existingAdmin)
      return ;
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newAdmin = new Users({
      email,
      password: passwordHash,
      username,
      avatar,
      role,
      location,
      wallet,
      allow
    });
    const savedAdmin = await newAdmin.save();
    
    const newChat = new Chats({
      email
    });

    await newChat.save();

    return ;
};

init(admin);
/////////////////////////////

 router.route("/account/login").post(catchErrors(login));

 router.route("/account/me").get(catchErrors(isValidToken));

 router.route("/account/signup").post(catchErrors(register));
 router.route("/account/streakFreeze").post(catchErrors(streakFreeze));

module.exports = router;
