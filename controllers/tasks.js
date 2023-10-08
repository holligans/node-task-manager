const tasks = require("../db/tasks.json");

const getAllTasks = (req, res) => {
  res.status(200).json({ tasks });
};
const createTask = (req, res) => {
  console.log("hisdsds");
  res.status(200).send(req.body);
};
const getTask = (req, res) => {
  res.status(200).send("Get Task");
};
const updateTask = (req, res) => {
  res.status(200).send("Update Task");
};
const deleteTask = (req, res) => {
  res.status(200).send("Delete Task");
};
module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
