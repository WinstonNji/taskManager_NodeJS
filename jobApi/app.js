require('dotenv').config()
const express = require('express')
const app = express()
const authRoutes = require('./Router/auth.routes')
const jobRoutes = require('./Router/job.routes')
const mongoose = require('mongoose')

app.use(express.json())

const userURI = process.env.USER_URI

mongoose.connect(userURI)
    .then(() => {
        console.log('connectedToDB')
        app.listen(3000, () => {
            console.log('Server has been initialised')
        })
    })

app.use('/api/v1/jobApi/auth', authRoutes)
app.use('/api/v1/jobApi', jobRoutes)

