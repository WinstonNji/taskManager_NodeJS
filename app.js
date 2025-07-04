require('dotenv').config()
const express = require ('express')
const app = express ()
const taskRoutes = require('./Router/taskManager_Routes')
const mongoose = require('mongoose')

const dbURI = process.env.MONGO_URI

mongoose
    .connect(dbURI)
    .then(result => {
        app.listen(3000, ()=> console.log('localhost connected'))
    }).catch(err => console.log(err))

// MiddleWare
app.use(express.static('Public'))
app.use(express.json())
app.use('/api/v2/tasks', taskRoutes)
