const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        type: String,
        required : true, 
    },

    email : {
        type: String,
        required: [true, 'enter a valid email'],
        unique: true,
        match: [
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 
            'Please provide a valid email'
        ]

    },  

    password : {
        type: String,
        minlength : 8

    }
}, {timestamps: true})

module.exports = mongoose.model('User', UserSchema)