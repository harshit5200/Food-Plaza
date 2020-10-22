const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//User Schema

const UserSchema = new Schema({
    email: {
        type: String,
        require: true,
        unique: true,
    },
    firstName: {
        type:String,
        require: true
    },
    lastName: {
        type:String,
        require: true
    },
    password: {
        type:String,
        require: true
    },
    mobileNo: {
        type:String,
        require: true
    },
    address: {
        type:String,
        require: true
    },
    city: {
        type:String,
        require: true
    },
    state: {
        type:String,
        require: true
    },
    pincode: {
        type:String,
        require: true
    },
    joinDate: {
        type: Date,
        default: Date.now()
    }
});

module.exports = User = mongoose.model('user',UserSchema);