const ProductsController = require('../controllers/products');
const express = require('express');

const router = express.Router();

router.get('/', ProductsController.getProducts);

module.exports = router;