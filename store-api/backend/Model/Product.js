const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Product = new Schema({
    name : {
        type: String,
        required: true
    },

    price : {
        type: Number,
        required: true
    },

    rating: {
        type: Number,
        required: false,
        default: 4
    },

    company: {
        type: String,
        required: true
    }

}, {timestamps: true})

module.exports = mongoose.model('Product', Product )