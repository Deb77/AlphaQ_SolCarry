const { Router } = require('express');
const itemController = require('../controllers/itemController');

const router = Router();

router
    .post('/specific', itemController.item_get)
    .post('/', itemController.item_post)
    .put('/:id', itemController.item_update)
    .delete('/:id', itemController.item_delete);

module.exports = router;
