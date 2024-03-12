

// const mongoose=require('mongoose')


// const TaskSchema=new mongoose.Schema({
//     name:String,
//     completed:Boolean
// })
// module.exports=mongoose.model('Task,TaskSchema')
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,'lease provide a name'],
        trim:true,
        maxlength:[20,"Name cannot be more than 20 characters"]
    },
    completed: {
        type:Boolean,
        default:false,
    }
});

const Task = mongoose.model('Task', TaskSchema);  // Register the schema and create the model

module.exports = Task;





