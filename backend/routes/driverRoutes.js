const { Router } = require('express');
const driverController = require('../controllers/driverController');

const router = Router();

router
    .post('/signup', driverController.signup_post)
    .post('/login', driverController.login_post)
    .put('/stats/:id', driverController.stats_update)
    .post('/closest',driverController.closest_get)

module.exports = router;

