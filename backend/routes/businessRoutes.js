const { Router } = require('express');
const businessController = require('../controllers/businessController');

const router = Router();

router
    .get('/', businessController.find_all_get)
    .post('/signup', businessController.signup_post)
    .post('/login', businessController.login_post)
    .get('/filter', businessController.filter_get);

module.exports = router;

