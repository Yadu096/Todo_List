const mongoose = require('mongoose');

const tasksSchema = mongoose.Schema({
    description:{
        type: String,
        required: true
    },
    isCompleted:{
        type: Boolean,
        default: false
    }
})

const Tasks = mongoose.model('Tasks', tasksSchema);

//Export the Schema
module.exports = Tasks;