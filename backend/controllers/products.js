const ProductModel = require('../models/product');

class ProductsController {
    static async getProducts(req, res) {
        const products = await ProductModel.findAll();
        res.render('products', {
            title: 'Products',
            products: products
        });
    }
}

module.exports = ProductsController;