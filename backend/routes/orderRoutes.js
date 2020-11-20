const { Router } = require('express');
const orderController = require('../controllers/orderController');

const router = Router();

router
    .get('/', orderController.order_get)
    .post('/', orderController.order_post);

module.exports = router;