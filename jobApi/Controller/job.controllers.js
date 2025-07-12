const jobModel = require('../Model/job.model')


const createJob = async (req,res) => {
    req.body.createdBy = req.user.userId

    const job = await jobModel.create(req.body)
    res.json(job)
}

const updateJob = async (req, res) => {
    const newJob = await jobModel.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})

    return res.json(newJob)
}

const deleteJob = async (req,res) => {
    const jobId = req.params.id
    const userId = req.user.userId

    const deletedJob = await jobModel.findOneAndDelete({
        _id : jobId,
        createdBy: userId
    })

    return res.json(deletedJob)
}

const getAllJobs = async (req,res) => {
    const jobs = await jobModel.find({createdBy: req.user.userId})
    return res.json(jobs)
}

const getSingleJob = async (req,res) => {
    const jobId = req.params.id
    const userId = req.user.userId

    const job = await jobModel.findOne({
        _id : jobId,
        createdBy : userId
    })

    return res.json(job)
}

module.exports = {
    createJob,
    updateJob,
    deleteJob,
    getAllJobs,
    getSingleJob
}