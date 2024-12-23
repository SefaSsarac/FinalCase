const mongoose = require('mongoose');

// Schema

const userSchema = new mongoose.Schema({
    username : {
        type:String,        
    },
    email : {
        type:String, 
    },
    password : {
        type:String, 
    },
    createdAd : {
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('User', userSchema)