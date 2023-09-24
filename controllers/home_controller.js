const Tasks = require('../models/tasks');


module.exports.home = function(req, res){
    Promise.all([
        Tasks.find({isCompleted: false}),
        Tasks.find({isCompleted: true}),
    ]).then(([pendingTasksList, completedTasksList])=>{
        return res.render('home', {
            title: "Home Page",
            pendingTasksList: pendingTasksList,
            completedTasksList: completedTasksList,
        });
    }).catch((err)=>{
        console.log(err, " Error occured in fetching the data from the DB");
    })
}