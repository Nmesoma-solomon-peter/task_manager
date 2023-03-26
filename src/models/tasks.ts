import mongoose, { Schema, model, connect } from "mongoose";


const TaskSchema = new mongoose.Schema({
name:{
    type:String,
    required:[true,'You must include name'],
    trim:true,
    maxlength:[50,'you must not input more than 50 words']
},
completed:{
    type:Boolean,
    default:false,
},
});

const Task = mongoose.model('Task',TaskSchema);

export default Task