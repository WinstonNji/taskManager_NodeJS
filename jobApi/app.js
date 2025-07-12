require('dotenv').config()
const express = require('express')
const app = express()
const authRoutes = require('./Router/auth.routes')
const jobRoutes = require('./Router/job.routes')
const mongoose = require('mongoose')

// Security
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');

app.use(helmet());
app.use(cors());
app.use(hpp());

app.use(express.json())

app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
}));

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

