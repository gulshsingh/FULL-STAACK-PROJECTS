const mongoose = require("mongoose");


// User model schema
const UserModel = mongoose.Schema({

name :{type:String, trim:true, required:true},
email :{type:String, trim:true, required:true, unique:true},    
password :{type:String, trim:true, required:true},
pic :{type:String, required:true,  default:"https://iconarchive.com/download/i107272/Flat-Icons-2/User-Profile-2.ico"},

})



const User = mongoose.mpodel("User", UserModel);


module.exports = User