const express = require('express');
const productsRoutes = require('./products');

const router = express.Router({ mergeParams: true });

router.use('/products', productsRoutes);

module.exports = router;