const express = require('express');
const port = 8000;
const app = express();

//Include the mongoose connection and Schema
const db = require('./config/mongoose');



//Setup the view engine
app.set('view engine','ejs');
app.set('views', './views');

//Setup the static folder
app.use(express.static('assets'));

//Assign the router
app.use('/', require('./routes/index'));



//Run the server 
app.listen(port, function(err){
    if(err){
        console.log(`${err} error occured in running the server`);
    }
    console.log(`Server is up and running on the port ${port}`);
})