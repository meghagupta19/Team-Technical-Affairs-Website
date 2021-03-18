const passportlocalMongoose = require("passport-local-mongoose");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:String,
    contact : Number,
    roll : Number,
    
})

userSchema.plugin(passportlocalMongoose);
module.exports = mongoose.model('User',userSchema);