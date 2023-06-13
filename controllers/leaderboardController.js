
const mongoose = require("mongoose");
const Users = mongoose.model("Users");
const Loans = mongoose.model("Loans");
const moment = require('moment');

require("dotenv").config({ path: ".variables.env" });

exports.economicPillars = async (req, res) => {

  try {

    const users = await Loans.find().populate({path : "id", select : ["username", "email", "avatar", "location", "wallet"]}).lean();

    var totalLoan = 0, loanNumber = 0 ;

    for(var i = 0 ; i < users.length ; i++)
    {
      for(var k=0; k < users[i].actions.length ; k++)    
        if(users[i].actions[k].loans !== 0)
        {
          totalLoan += users[i].actions[k].loans ;
          loanNumber +=1;
        }
        users[i]["totalLoan"] = totalLoan;
        users[i]["loanNumber"] = loanNumber;
        totalLoan = 0; loanNumber = 0 ;
      }

      if(users.length > 1)
      users.sort(function(a, b) {
        return parseFloat(b.totalLoan) - parseFloat(a.totalLoan);
      });

    for( i = 0 ; i < users.length ; i++)
    {
      users[i]["number"] = i+1;
    }
  

    if(users.length > 10)
    {
      const newUsers = users.slice(0,10);
       return res.status(200).json({
        pillars:newUsers
      });
    }

       return res.status(200).json({
        pillars:users
      });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.samaritans = async (req, res) => {

  try {

    const users = await Loans.find().populate({path : "id", select : ["username", "email", "avatar", "location", "wallet"]}).lean();

    var totalgift = 0, giftNumber = 0 ;

    for(var i = 0 ; i < users.length ; i++)
    {
      for(var k=0; k < users[i].actions.length ; k++)    
        if(users[i].actions[k].gifts !== 0)
        {
          totalgift += users[i].actions[k].gifts ;
          giftNumber +=1;
        }
        users[i]["totalgift"] = totalgift;
        users[i]["giftNumber"] = giftNumber;
        totalgift = 0; giftNumber = 0 ;
      }

      if(users.length > 1)
      users.sort(function(a, b) {
        return parseFloat(b.totalgift) - parseFloat(a.totalgift);
      });

    for( i = 0 ; i < users.length ; i++)
    {
      users[i]["number"] = i+1;
    }
  

    if(users.length > 10)
    {
      const newUsers = users.slice(0,10);
       return res.status(200).json({
        samaritans:newUsers
      });
    }

       return res.status(200).json({
        samaritans:users
      });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.wealthiest = async (req, res) => {

  try {

    const users = await Users.find({role : "learner"}).lean();

      if(users.length > 1)
      users.sort(function(a, b) {
        return parseFloat(b.wallet) - parseFloat(a.wallet);
      });

    for( i = 0 ; i < users.length ; i++)
    {
      users[i]["number"] = i+1;
    }
  

    if(users.length > 10)
    {
      const newUsers = users.slice(0,10);
       return res.status(200).json({
        wealthiest:newUsers
      });
    }

       return res.status(200).json({
        wealthiest:users
      });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.spenders = async (req, res) => {

  try {

    const users = await Users.find({role : "learner"}).lean();

      if(users.length > 1)
      users.sort(function(a, b) {
        return parseFloat(b.totalSpending) - parseFloat(a.totalSpending);
      });

    for( i = 0 ; i < users.length ; i++)
    {
      users[i]["number"] = i+1;
    }
  

    if(users.length > 10)
    {
      const newUsers = users.slice(0,10);
       return res.status(200).json({
        spenders:newUsers
      });
    }

       return res.status(200).json({
        spenders:users
      });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.streaks = async (req, res) => {

  try {

    const users = await Users.find({role : "learner"}).lean();

      if(users.length > 1)
      users.sort(function(a, b) {
        return parseFloat(b.streaks) - parseFloat(a.streaks);
      });

    for( i = 0 ; i < users.length ; i++)
    {
      users[i]["number"] = i+1;
    }
  

    if(users.length > 10)
    {
      const newUsers = users.slice(0,10);
       return res.status(200).json({
        streaks:newUsers
      });
    }

       return res.status(200).json({
        streaks:users
      });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};


