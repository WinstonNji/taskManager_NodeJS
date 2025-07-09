const authController = require('../Controller/auth.controller')

const express = require('express')
const router = express.Router()

router.route('/login').post(authController.login)

router.route('/dashboard').get(authController.dashBoard)

module.exports = router