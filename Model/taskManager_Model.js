const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TaskManager = new Schema ({
    taskName : {
        type: String,
        required: true
    }, 

    createdBy : {
        type: String,
        required: false
    }, 

    completed: {
        type: Boolean,
        default: false
    }

}, {timestamps:true})

module.exports = mongoose.model('Task', TaskManager)