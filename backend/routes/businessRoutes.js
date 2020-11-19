const { Router } = require('express');
const businessController = require('../controllers/businessController');

const router = Router();

router
    .post('/signup', businessController.signup_post)
    .post('/login', businessController.login_post);

module.exports = router;

