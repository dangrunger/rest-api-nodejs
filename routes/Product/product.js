const express = require('express');
const router  = express.Router();
const productController = require('../../controllers/Product/product');

router.get('/product', productController.getAllProducts);
router.post('/product', productController.newProduct);
router.delete('/product', productController.deleteAllProducts);

router.get('/product/:name', productController.getOneProduct);
router.delete('/product/:name', productController.deleteOneProduct);

module.exports = router;