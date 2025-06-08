const mongoose = require("mongoose");

const MessageMOdel = mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  content:{type:String , trim:true, required:true},


  chat : {type: mongoose.Schema.Types.ObjectId, ref:"Chat"} 
}
,

{
    timeStamps:true,
}
);

const message = mongoose.model("message", MessageMOdel);

module.exports = message;
