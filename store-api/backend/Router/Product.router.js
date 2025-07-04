const express = require('express')
const router = express.Router()
const ProductController = require('../Controller/Product.controller')

router.get('/', ProductController.getAllProducts )

router.get('/filtered', ProductController.getFilteredProduct)

router.get('/:id', ProductController.getSingleProduct)

module.exports = router