const express = require('express');
const router = express.Router();
const showController = require('../controllers/show_controller');

//Handle the requests
router.get('/all', showController.all);
router.get('/pending', showController.pending);
router.get('/completed', showController.completed);


module.exports = router;