const Product = require('../Model/Product')
const express = require ('express')
const router = express.Router()

getAllProducts = (req,res) => {
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

getFilteredProduct = (req, res) => {
    const {name, company, price, rating, sortByName, sortByPrice} = req.query
    const requestObj = {}

    

    if(name) requestObj.name = {$regex: name, $options: 'i'}
    if(company) requestObj.company = company

    if(price){
        const [min,max] = price.split('-')

        requestObj.price = {
            $gte: min,
            $lte : max
        }
    }

    if(rating){
        requestObj.rating = {
            $gte : rating
        }
    }

    let sortValue = null

    if(sortByName)sortValue = sortByName
    if(sortByPrice)sortValue = sortByPrice

    console.log(req.query, 'query')
    console.log(requestObj, 'ourObject')
    
    Product.find(requestObj).sort(null || sortValue)
        .then(result => {
            res.json(result)
        })
}


module.exports = {
    getAllProducts,
    getFilteredProduct,
    getSingleProduct
}