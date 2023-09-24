const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo_tasks');

const db = mongoose.connection;

db.on('err', console.error.bind(console, "Error occured in connecting with the Mongo"));
db.once('open', function(){
    console.log("Successfully connected to the Mongo");
})

module.exports.db = db;