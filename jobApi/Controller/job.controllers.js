
const createJob = (req,res) => {
    res.json(req.body)
}

const updateJob = (req, res) => {
    res.json(req.body)
}

const deleteJob = (req,res) => {
    res.send('job deleted')
}

const getAllJobs = (req,res) => {
    res.send('Got all jobs')
}

module.exports = {
    createJob,
    updateJob,
    deleteJob,
    getAllJobs
}