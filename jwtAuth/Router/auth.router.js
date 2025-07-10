const authController = require('../Controller/auth.controller')
const authMiddleWare = require('../middleware/auth/auth.middleware')

const express = require('express')
const router = express.Router()

router.route('/login').post(authController.login)

router.route('/dashboard').get(authMiddleWare,authController.dashBoard)

module.exports = router