const mongoose = require("mongoose");

const userModel = mongoose.Schema({
    Name: {
        type: String,
        rrequired: true
    },
    email: {
        type: String,
        rrequired: true
    },
    password: {
        type: String,
        rrequired: true
    }
},{
    timeStamp: true
})

const User = mongoose.Model("User", userModel);
module.exports = User;