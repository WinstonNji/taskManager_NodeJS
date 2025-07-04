const Task = require('../Model/taskManager_Model')

const allTasks = (req,res) => {
    Task.find()
        .then(result => {
            res.json(result)
        })
}

const findSpecificTask = (req, res) => {
    Task.findById(req.params.id)
        .then(result => {
            res.json(result)
        })
}

const createTask = (req, res) => {
    const task = new Task(req.body)

    task.save()
        .then(result => {
            res.json(result)
        })
}

const editTask = (req, res) => {
    Task.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators: true})
        .then(result => {
            console.log(req.params.id,req.body, 'reqBody')
            res.json(result)
        })
}

const deleteTask = (req,res) => {
    Task.findByIdAndDelete(req.params.id)
        .then( result => {
            res.json(result)
        })
}



module.exports = {
    allTasks,
    findSpecificTask,
    editTask,
    deleteTask,
    createTask
}

