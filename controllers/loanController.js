
const mongoose = require("mongoose");
const Users = mongoose.model("Users");
const Loans = mongoose.model("Loans");
const moment = require('moment');

require("dotenv").config({ path: ".variables.env" });


exports.updateOne = async (req, res) => {

  try {
     let { myId, userId, togift, toloan, giftreq, loanreq} = req.body;

     const Me =await Loans.findOne({id : myId}).select(["loanallow", "giftallow"]);
     const date = new Date();
     const ToLoan = toloan * 95/100;
     const ToGift = togift * 94/100;
    
     if(toloan > 0)
     {
        if(moment(date).subtract(1, 'days') < moment(Me.loanallow))
            return res.status(200).json({
                    success:false,
                    message:"You cannot re-loan within 24 hours!"
                  });
        else {
         
          const borrowed = await Loans.findOne({id : myId}, {'actions':  { $elemMatch: {userid: userId}} })
         
          if((ToLoan - borrowed.actions[0].borrows) >= 0)
          {
            await Loans.findOneAndUpdate(
              {id: myId},
              {$set: {"actions.$[el].borrows": 0 } },
              { 
                arrayFilters: [{ "el.userid": userId }],
                new: true
              }
            );

            await Loans.findOneAndUpdate(
              {id: myId},
              {$set: {"actions.$[el].loans": (ToLoan - borrowed.actions[0].borrows + borrowed.actions[0].loans) } },
              { 
                arrayFilters: [{ "el.userid": userId }],
                new: true
              }
            );

            await Loans.findOneAndUpdate(
              {id: userId},
              {$set: {"actions.$[el].loans": 0 } },
              { 
                arrayFilters: [{ "el.userid": myId }],
                new: true
              }
            );

            await Loans.findOneAndUpdate(
              {id: userId},
              {$set: {"actions.$[el].borrows": (ToLoan - borrowed.actions[0].borrows + borrowed.actions[0].loans) } },
              { 
                arrayFilters: [{ "el.userid": myId }],
                new: true
              }
            );
          }
          else{
            await Loans.findOneAndUpdate(
              {id: myId},
              {$set: {"actions.$[el].borrows": (borrowed.actions[0].borrows - ToLoan)} },
              { 
                arrayFilters: [{ "el.userid": userId }],
                new: true
              }
            );
            await Loans.findOneAndUpdate(
              {id: userId},
              {$set: {"actions.$[el].loans": (borrowed.actions[0].borrows - ToLoan)} },
              { 
                arrayFilters: [{ "el.userid": myId }],
                new: true
              }
            );
          }
          
          if((ToLoan - borrowed.actions[0].getLoanReq) >= 0)
          {
            await Loans.findOneAndUpdate(
              {id: myId},
              {$set: {"actions.$[el].getLoanReq": 0 } },
              { 
                arrayFilters: [{ "el.userid": userId }],
                new: true
              }
            );
            await Loans.findOneAndUpdate(
              {id: userId},
              {$set: {"actions.$[el].sendLoanReq": 0 } },
              { 
                arrayFilters: [{ "el.userid": myId }],
                new: true
              }
            );
          }
          else{
            await Loans.findOneAndUpdate(
              {id: myId},
              {$set: {"actions.$[el].getLoanReq": ( borrowed.actions[0].getLoanReq - ToLoan) } },
              { 
                arrayFilters: [{ "el.userid": userId }],
                new: true
              }
            );
            await Loans.findOneAndUpdate(
              {id: userId},
              {$set: {"actions.$[el].sendLoanReq": ( borrowed.actions[0].getLoanReq - ToLoan)} },
              { 
                arrayFilters: [{ "el.userid": myId }],
                new: true
              }
            );
          }

          const Spending = await Users.findOne({_id : myId}).select(["totalSpending", "wallet"]);

          await Users.findOneAndUpdate(
            {_id: myId},
            {totalSpending: Spending.totalSpending + (toloan - ToLoan),
            wallet:Spending.wallet - toloan
            },
            { 
              new: true
            }
          );

          const plus = await Users.findOne({_id : userId}).select( "wallet");

          await Users.findOneAndUpdate(
            {_id: userId},
            {
               wallet:plus.wallet + ToLoan
            },
            { 
              new: true
            }
          );

          await Loans.findOneAndUpdate(
            {id: myId},
            {loanallow: moment().toDate().getTime() },
            { 
              new: true
            }
          );

        }
     }
//----------------------------------------------------------------


if(togift > 0)
     {
        if(moment(date).subtract(1, 'days') < moment(Me.giftallow))
            return res.status(200).json({
                    success:false,
                    message:"You cannot re-gift within 24 hours!"
                  });
        else {
          
          const received = await Loans.findOne({id : myId}, {'actions':  { $elemMatch: {userid: userId}} })
         
            await Loans.findOneAndUpdate(
              {id: myId},
              {$set: {"actions.$[el].gifts": (received.actions[0].gifts + ToGift)} },
              { 
                arrayFilters: [{ "el.userid": userId }],
                new: true
              }
            );
            await Loans.findOneAndUpdate(
              {id: userId},
              {$set: {"actions.$[el].receives": (received.actions[0].gifts + ToGift)} },
              { 
                arrayFilters: [{ "el.userid": myId }],
                new: true
              }
            );
          
          if((ToGift - received.actions[0].getGiftReq) >= 0)
          {
            await Loans.findOneAndUpdate(
              {id: myId},
              {$set: {"actions.$[el].getGiftReq": 0 } },
              { 
                arrayFilters: [{ "el.userid": userId }],
                new: true
              }
            );
            await Loans.findOneAndUpdate(
              {id: userId},
              {$set: {"actions.$[el].sendGiftReq": 0 } },
              { 
                arrayFilters: [{ "el.userid": myId }],
                new: true
              }
            );
          }
          else{
            await Loans.findOneAndUpdate(
              {id: myId},
              {$set: {"actions.$[el].getGiftReq": ( received.actions[0].getGiftReq - ToGift) } },
              { 
                arrayFilters: [{ "el.userid": userId }],
                new: true
              }
            );
            await Loans.findOneAndUpdate(
              {id: userId},
              {$set: {"actions.$[el].sendGiftReq": ( received.actions[0].getGiftReq - ToGift)} },
              { 
                arrayFilters: [{ "el.userid": myId }],
                new: true
              }
            );
          }

          const Spending1 = await Users.findOne({_id : myId}).select(["totalSpending", "wallet"]);

          await Users.findOneAndUpdate(
            {_id: myId},
            { totalSpending: Spending1.totalSpending + (togift - ToGift),
              wallet : Spending1.wallet - togift
            },
            { 
              new: true
            }
          );

          const plus1 = await Users.findOne({_id : userId}).select( "wallet");

          await Users.findOneAndUpdate(
            {_id: userId},
            {
               wallet:plus1.wallet + ToGift
            },
            { 
              new: true
            }
          );

          await Loans.findOneAndUpdate(
            {id: myId},
            {giftallow: moment().toDate().getTime() },
            { 
              new: true
            }
          );

        }
     }

     await Loans.findOneAndUpdate(
      {id: myId},
      {$set: {"actions.$[el].sendLoanReq": loanreq  } },
      { 
        arrayFilters: [{ "el.userid": userId }],
        new: true
      }
    );
    await Loans.findOneAndUpdate(
      {id: userId},
      {$set: {"actions.$[el].getLoanReq": loanreq} },
      { 
        arrayFilters: [{ "el.userid": myId }],
        new: true
      }
    );
    await Loans.findOneAndUpdate(
      {id: myId},
      {$set: {"actions.$[el].sendGiftReq": giftreq  } },
      { 
        arrayFilters: [{ "el.userid": userId }],
        new: true
      }
    );
    await Loans.findOneAndUpdate(
      {id: userId},
      {$set: {"actions.$[el].getGiftReq": giftreq} },
      { 
        arrayFilters: [{ "el.userid": myId }],
        new: true
      }
    );

      return res.status(200).json({
        success:true,
        message:"successfully saved! Please check your action."
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
     let {userid} = req.params;

    const user = await Loans.findOne({id : userid}).populate({path : "actions.userid", select : ["username", "avatar", "location", "wallet"]}).lean();

       return res.status(200).json({
        relation:user.actions
      });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getOne = async (req, res) => {

  try {
     let {myId, userId} = req.body;
    const user = await Loans.findOne({id : myId}, {'actions':  { $elemMatch: {userid: userId}} }).populate({path : "actions.userid", select : ["username", "avatar", "location", "wallet"]});
       return res.status(200).json({
        relation:user.actions[0]
      });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.statistics = async (req, res) => {

  try {
     let {id} = req.params;
    const user = await Loans.findOne({id : id}).select("actions");

    var loans = 0, receives=0, gifts = 0, borrows = 0;

    if(user.actions.length == 0){
      var statistics = {loans:0, receives:0, gifts:0, borrows:0};
    }
    else{
      for(var k=0; k < user.actions.length ; k++)
      {
        loans += user.actions[k].loans;
        receives += user.actions[k].receives;
        gifts += user.actions[k].gifts;
        borrows += user.actions[k].borrows;
  
      }
      var statistics = {loans, receives, gifts, borrows};
    }

       return res.status(200).json({
        statistics:statistics
      });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};


