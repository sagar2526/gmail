const mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
    username:	String,
    password: String,
    confirmPassword: String,
    firstName: String,
    middleName: String,
    lastName: String,
    dob: Date,
    gender: String,
    token: Array,
    createdAt: Date,
    updatedAt: Date,
})

const User = mongoose.model('User', UserSchema);

module.exports = User;