//get the schema
const Tasks = require('../models/tasks');


module.exports.create = function(req, res){
    
    Tasks.create({
        description: req.body.description,
        isCompleted: true
    }).then((newData)=>{
        console.log("***", newData);
        return res.redirect('back');
    }).catch((err)=>{
        console.log(err, " Error occured in feeding the DB");
        return res.redirect('back');
    })
}

module.exports.delete = function(req, res){
    const id = req.query.id;
    Tasks.findByIdAndDelete(id).then(()=>{
        return res.redirect('back');
    }).catch((err)=>{
        console.log(err, " Could not delete the document");
        return;
    })
}

module.exports.markCompleted = function(req, res){
    
    const id = req.query.id;
    Tasks.findByIdAndUpdate(id, {isCompleted: true}).then((document)=>{
        console.log("Updated document: ", document);
        return res.redirect('back');
    }).catch((err)=>{
        console.log(err, " Could not update the document");
        return;
    })
}

module.exports.markIncomplete = function(req, res){

    const id = req.query.id;
    Tasks.findByIdAndUpdate(id, {isCompleted: false}).then((document)=>{
        console.log("Updated document: ", document);
        return res.redirect('back');
    }).catch((err)=>{
        console.log(err, " Could not update the document");
        return;
    })

}