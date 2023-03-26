import express, { Application, Request, Response } from "express";
import Task from "../models/tasks";
import { asyncWrapper } from "../middleware/asyncWrapper";
// get all tasks route

export const getAllTasks =asyncWrapper( async (
  req: Request,
  res: Response
): Promise<void> => {
    const task = await Task.find({});
    if(!task){
        res.status(404).json({msg:"database is empty"})
    }
    res.status(200).json(task);
 
});
// create task route 
export const createTask =asyncWrapper( async (
  req: Request,
  res: Response
): Promise<void> => {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
});
// get single task
export const getTask =asyncWrapper( async (req: Request, res: Response) => {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `NO TASK WITH ID ${taskID}` });
    }
    res.status(200).json({ task });
});
// update task
export const updateTask =asyncWrapper( async (req: Request, res: Response)=> {
    const {id:taskID} = req.params;
    const task = await Task.findOneAndUpdate({_id:taskID},req.body,{new:true,runValidators:true})
    if(!task){
        res.status(404).json({msg:`NO TASK WITH ID ${taskID} found`})
    }
    res.status(200).json({task})
});

// delete task
export const deleteTask = asyncWrapper( async (req: Request, res: Response)=> {
    const {id:taskID} = req.params;
    const task = await Task.findByIdAndDelete({_id:taskID})
    if(!task){
        return res.status(404).json({msg: `no task with id ${taskID}`});
    }
    res.status(200).json({task}) 
});

// export = {
//     getAllTasks

// }
