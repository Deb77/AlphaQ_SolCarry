const { Router } = require('express');
const customerController = require('../controllers/customerController');

const router = Router();

router
    .post('/signup', customerController.signup_post)
    .post('/login', customerController.login_post);

module.exports = router;