const Product = require('../Model/Product')
const express = require ('express')
const router = express.Router()

getAllProducts = (req,res) => {
    Product.find()
        .then(result => {
            res.json(result)
        })
}

getFilteredProduct = (req, res) => {
    Product.find()
        .then(result => {
            res.json(result)
        })
}

getSingleProduct = (req,res) => {
    Product.findById(req.params.id)
        .then(result => {
            res.json(result)
        })
}

module.exports = {
    getAllProducts,
    getFilteredProduct,
    getSingleProduct
}