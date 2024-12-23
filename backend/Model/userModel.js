// /models/userModel.js
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        default: 'user'
    },
    password: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    resetOtp:{
    type:String
    },
    otpExpires:{
        type:Date
    }
}, { timestamps: true });

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;
