const ProductsController = require('../controllers/products');
const express = require('express');

const router = express.Router();

router.get('/', ProductsController.getProducts);
router.get('/:id', ProductsController.getProduct);
router.post('/', ProductsController.addProduct);
router.put('/:id', ProductsController.changeProduct);
// router.delete('/:id', ProductsController.deleteProduct);

module.exports = router;