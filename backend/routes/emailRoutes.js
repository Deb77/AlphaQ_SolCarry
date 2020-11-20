const { Router } = require('express');
const emailController = require('../controllers/emailController');

const router = Router();

router
    .post('/', emailController.email_post)

module.exports = router;

