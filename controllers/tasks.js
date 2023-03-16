const getAllTasks = (req, res) => {
    res.status(200).send("All Tasks");
}
const createTask = (req, res) => {
    res.status(200).send("Create Tasks");
}
const getTask = (req, res) => {
    res.status(200).send("Get Task");
}
const updateTask = (req, res) => {
    res.status(200).send("Update Task");
}
const deleteTask = (req, res) => {
    res.status(200).send("Delete Task");
}
module.exports = {getAllTasks,createTask,getTask,updateTask,deleteTask};