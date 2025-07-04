const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TaskManager = new Schema ({
    title : {
        type: String,
        required: true
    }, 

    createdBy : {
        type: String,
        required: false
    }, 

}, {timestamps:true})

module.exports = mongoose.model('Task', TaskManager)