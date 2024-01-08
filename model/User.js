require("../config/db")
const mongoose = require("mongoose")
const UserSchema = mongoose.Schema({
    name : String,
    email : String,
    password : String,
    
    state : String,
    city : String,
    gender : String,
    contact : String,
    address : String,
})

module.exports = mongoose.model("user",UserSchema)