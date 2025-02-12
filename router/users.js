const express = require('express');
const router = express.Router();

const userController = require('../controllers/users');
const productController = require('../controllers/products');
const orderController = require('../controllers/orders');

// User Routes
router.get('/users', userController.index);
router.get('/user/:id', userController.show);
router.post('/user', userController.store);
router.put('/user/:id', userController.update);
router.delete('/user/:id', userController.delete);

// Product Routes
router.get('/products', productController.index);
router.get('/product/:id', productController.show);
router.post('/product', productController.store);
router.put('/product/:id', productController.update);
router.delete('/product/:id', productController.delete);

// Order Routes
router.get('/orders', orderController.index);
router.get('/order/:id', orderController.show);
router.post('/order', orderController.store);
router.put('/order/:id', orderController.update);
router.delete('/order/:id', orderController.delete);

module.exports = router;
