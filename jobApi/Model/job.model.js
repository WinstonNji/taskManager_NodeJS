const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const JobSchema = new Schema ({
    company : {
        type : String,
        require: [true, 'Enter a company name']
    },

    role : {
        type: String
    },

    status: {
        type: String,
        enum : [
            'interview', 'declined', 'pending','hired'
        ],
        default: 'pending'
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: [true,  'Please provide User']
    }
}, {timestamps: true})

module.exports = mongoose.model('job', JobSchema)

