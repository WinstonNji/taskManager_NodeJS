const jobController = require('../Controller/job.controllers')
const authInterceptor = require('../middleWare/authMiddleware')
const express = require('express')
const router = express.Router()

router.route('/')
    .get(authInterceptor, jobController.getAllJobs)

router.route('/:id')
    .post(authInterceptor, jobController.createJob)
    .patch(authInterceptor,  jobController.updateJob)
    .delete(authInterceptor, jobController.deleteJob)

module.exports = router