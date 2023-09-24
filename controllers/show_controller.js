const Tasks = require('../models/tasks');

module.exports.all = function(req, res){
    Promise.all([
        Tasks.find({isCompleted: false}),
        Tasks.find({isCompleted: true}),
    ]).then(([pendingTasksList, completedTasksList])=>{
        return res.render('home', {
            title: "All Tasks",
            pendingTasksList: pendingTasksList,
            completedTasksList: completedTasksList
        });
    }).catch((err)=>{
        console.log(err, " Error occured in fetching the data from the DB");
    })
}

module.exports.pending = function(req, res){
    Promise.all([
        Tasks.find({isCompleted: false}),
        Tasks.find({isCompleted: true}),
    ]).then(([pendingTasksList, completedTasksList])=>{
        return res.render('home', {
            title: "Pending Tasks",
            pendingTasksList: pendingTasksList,
            completedTasksList: completedTasksList
        });
    }).catch((err)=>{
        console.log(err, " Error occured in fetching the data from the DB");
    })
}

module.exports.completed = function(req, res){
    Promise.all([
        Tasks.find({isCompleted: false}),
        Tasks.find({isCompleted: true}),
    ]).then(([pendingTasksList, completedTasksList])=>{
        return res.render('home', {
            title: "Completed Tasks",
            pendingTasksList: pendingTasksList,
            completedTasksList: completedTasksList
        });
    }).catch((err)=>{
        console.log(err, " Error occured in fetching the data from the DB");
    })
}