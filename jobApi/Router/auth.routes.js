const authRouter = require('../Controller/auth.controllers')

const express = require('express')
const router = express.Router()

router.route('/login')
    .post(authRouter.login)

router.route('/register')
    .post(authRouter.register)

module.exports = router