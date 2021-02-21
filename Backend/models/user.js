const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var User = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "../public/images/default.jpeg"
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 16
    },
    phone: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    verified: {
        type: Boolean,
        default: true
    },
    admin: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('User', User);