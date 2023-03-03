const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isDoctor : {
        type:Boolean,
        defualt:false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    watchedNotifications: {
        type: Array,
        default: []
    },
    seenNotifications: {
        type: Array,
        default: []
    },
    unseenNotifications: {
        type: Array,
        default: []
    }
}, {
    timestamps: true
})

const userModel = mongoose.model('users', userschema)

module.exports = userModel