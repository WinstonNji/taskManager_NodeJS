const TaskManager = require('../Model/taskManager_Model')

const allTasks = (req,res) => {
    TaskManager.find
        .then(result => {
            res.json(result)
        })
}

const findSpecificTask = (req, res) => {
    TaskManager.findById(req.params.id)
        .then(result => {
            res.json(result)
        })
}

const editTask = (req, res) => {
    TaskManager.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators: true})
        .then(result => {
            res.json(result)
        })
}

const deleteTask = (req,res) => {
    TaskManager.findByIdAndDelete(req.params.id)
        .then( result => {
            res.json(result)
        })
}

module.exports = {
    allTasks,
    findSpecificTask,
    editTask,
    deleteTask
}

