require('dotenv').config()
const Product = require('../Model/Product')
const jsonProduct = require('../product.json')
const mongoose = require('mongoose')

function start(){
    mongoose.connect(process.env.StoreApi_MongoUri)
    .then(result => {
        Product.insertMany(jsonProduct)
    })
}




