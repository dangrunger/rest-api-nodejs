const express = require('express');
const productController = require('../../controllers/Product/product');


 // Init express router
const router  = express.Router();

// Route get all products
router.get('/products', productController.getAllProducts);
// Route get product by id
router.get('/products/:id', productController.getProductById);
// Route create a new product
router.post('/products', productController.createProduct);
// Route update product by id
router.put('/products/:id', productController.updateProduct);
// Route delete product by id
router.delete('/products/:id', productController.deleteProductById);


module.exports = router;