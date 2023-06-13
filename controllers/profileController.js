const bcrypt = require("bcryptjs");

const mongoose = require("mongoose");
const Users = mongoose.model("Users");
const moment = require('moment');

require("dotenv").config({ path: ".variables.env" });

exports.updatePassword = async (req, res) => {

  try {
    const {id, currentpassword, password } = req.body;

    const users = await Users.findOne({ _id: id });
    const isMatch = await bcrypt.compare(currentpassword, users.password);
    if (!isMatch)
      return res.status(200).json({
        success: false,
        message: "Invalid current password."
      });

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    await Users.findOneAndUpdate(
      { _id: id },
      {
        password : passwordHash
      },
      {
        new: true
      }
    );

      return res.status(200).json({
        success: true,
        message: "Successfully changed."
       });
  } catch (err) {
     res.status(500).json({message: err.message });
  }
};

exports.updateAvartar = async (req, res) => {

  try {
     let { id, avatar, wallet} = req.body;

     const user =await Users.findOne({_id : id});

  await Users.findOneAndUpdate(
    { _id: id },
    {
      avatar,
      wallet : user.wallet - wallet,
      totalSpending: user.totalSpending + wallet
    },
    {
      new: true
    }
  );

      return res.status(200).json({
        message:"successfully Updated!"
      });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.updateSuttle = async (req, res) => {

  try {
     let { id, shuttle, wallet} = req.body;

     const user =await Users.findOne({_id : id});

  await Users.findOneAndUpdate(
    { _id: id },
    {
      shuttle,
      wallet : user.wallet - wallet,
      totalSpending: user.totalSpending + wallet
    },
    {
      new: true
    }
  );

      return res.status(200).json({
        message:"successfully Updated!"
      });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.updatename = async (req, res) => {

  try {
     let { id, location, username} = req.body;

  await Users.findOneAndUpdate(
    { _id: id },
    {
      location,
      username 
    },
    {
      new: true
    }
  );

      return res.status(200).json({
        message:"successfully Updated!"
      });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.spinwheel = async (req, res) => {

  try {
     let { userId, winner} = req.body;

     var value = 0; var freeze = false;

     switch(winner){
      case "VN 50": {value = 50; break;}
      case "VN 70": {value = 70; break;}
      case 'Streak freeze 1': {freeze = true; break;}
      case "VN 25": {value = 25; break;}
      case "VN 300": {value = 300; break;}
      case "VN 40": {value = 40; break;}
      case "VN 65": {value = 65; break;}
      case "VN 120": {value = 120; break;}
      case "VN 5": {value = 5; break;}
      case "VN 1000": {value = 1000; break;}
      case "VN 45": {value = 45; break;}
      case "VN 400": {value = 400; break;}
      case "VN 5000": {value = 5000; break;}
      case "VN 75": {value = 75; break;}
      case "VN 500": {value = 500; break;}
      case "VN 30": {value = 30; break;}
      default : {value = 0; break;}
     }

     const me = await Users.findOne({_id : userId});

     if(freeze)
     {     
      await Users.findOneAndUpdate(
        { _id: userId },
        { freeze: me.freeze + 1, spin:moment().toDate().getTime()},
        {
          new: true,
        }
      );
     }
     else{
      await Users.findOneAndUpdate(
        { _id: userId },
        { wallet: me.wallet + value, spin:moment().toDate().getTime()},
        {
          new: true,
        }
      );
     }

      return res.status(200).json({
        message:"Successfully saved your rewards!"
      });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};


