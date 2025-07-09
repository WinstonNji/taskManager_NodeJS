// require('dotenv').config()
const express = require('express')
const app = express()
const authRouter = require('./Router/auth.router')

app.listen(3000, () => {
    console.log('Server Opened')
})

app.use(express.json())

app.use('/api/v1/jwtAuth', authRouter)

