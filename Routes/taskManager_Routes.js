const express = require('express')
const router = express.Router()
const taskManagerControls = require('../Controller/taskManagerController')

router.get('/', taskManagerControls.allTasks)
router.route('/:id')
    .get(taskManagerControls.findSpecificTask)
    .patch(taskManagerControls.editTask)
    .delete(taskManagerControls.deleteTask)


module.exports = router