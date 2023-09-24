const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

//route to controller
router.get('/', homeController.home);

//route to tasks
router.use('/tasks', require('./tasks'));

module.exports = router;