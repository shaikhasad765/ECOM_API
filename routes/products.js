const express = require('express');
const router = express.Router();

// initializing products controller
const productsController = require('../controllers/products_controller');

router.get('/', (req, res) => {
    res.send('Hello User!');
});

// to get all the products
router.get('/products', productsController.products);

// to create a product
router.post('/create', productsController.create);

// to delete a product using it's ID
router.delete('/:productID', productsController.delete);

// to update the quantity of a product
router.post('/:productID/update_quantity/', productsController.updateQuantity);

module.exports = router;