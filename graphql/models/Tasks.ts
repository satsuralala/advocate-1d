import mongoose from "mongoose";

const taskSchema= new mongoose.Schema({
    taskName:{
        type:String,
        required:true,
    },
    isDone:{
        type:Boolean,
        default:false,
    },
    priority:{
        type:Number,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
    updatedAt:{
        type:Date,
        default:Date.now,
    }
})

export const Task = mongoose.models.Task || mongoose.model('Task', taskSchema);
// export const Task = mongoose.model('Task', taskSchema);