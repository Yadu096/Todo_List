const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasks_controller');

//Setup a body parser
router.use(express.urlencoded({extended: false}));

//route get requests to their respective controllers
router.post('/create', tasksController.create);
router.get('/delete', tasksController.delete);
router.get('/mark-completed', tasksController.markCompleted);
router.get('/mark-incomplete', tasksController.markIncomplete);

//route the show requests
//router.use('/show', require('./show'));


module.exports = router;