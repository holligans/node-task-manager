const Task = require("../models/Task");
const asyncWrapper = require("../middlewares/asyncWrapper");

const getAllTasks = asyncWrapper( async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({tasks});
    // res.status(500).json({message:error});
});

const createTask = asyncWrapper( async (req, res) => {
    const newTask = await Task.create(req.body);
    res.status(201).json({task:newTask});
    // res.status(500).json({error});
});

const getTask = asyncWrapper( async (req, res) => {
    const {id:taskID} = req.params;
    const task = await Task.findOne({_id:taskID});
    if(!task){
        return  res.status(404).json({message:`No task found with id:${taskID}.`});
    }
    res.status(200).json({task});
    // res.status(500).json({message:error});
});

const updateTask = asyncWrapper( async (req, res) => {
    const {id:taskID} = req.params;
    const updateTask = await Task.findOneAndUpdate({_id:taskID}, {...req.body},{returnDocument:"after"});
    if(!updateTask){
        return  res.status(404).json({message:`No task found with id:${taskID}.`});
    }
    res.status(200).json(updateTask);
    // return res.status(500).json({message:error});
});

const deleteTask =asyncWrapper( async (req, res) => {
    const {id:taskID} = req.params;
    const deletedTask = await Task.findOneAndDelete({_id:taskID});
    if(!deletedTask){
        return res.status(404).json({message:`No task found with id:${taskID}.`})
    }
    res.status(200).json({task:taskID, message:"Task has been deleted"});
    // res.status(500).json({message:error});
});

module.exports = {getAllTasks,createTask,getTask,updateTask,deleteTask};