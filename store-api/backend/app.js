require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const ProductRoutes = require('./Router/Product.router')

const dbURI = process.env.StoreApi_MongoUri

mongoose.connect(dbURI)
    .then(_ => {
        app.listen(3003, ()=> console.log('connected to store api database successfully') )
    })

app.use('/api/v2/Products', ProductRoutes)