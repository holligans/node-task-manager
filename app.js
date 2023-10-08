const express = require('express');
const tasks = require('./routes/tasks');
const app = express();

// middlewares
app.use(express.static('public'));
app.use(express.json());

// routes
app.use('/api/v1/tasks', tasks);

app.get("/hello", (req, res) => {
    res.status(200).send("Task Manager");
})


const PORT = 8000;
app.listen(PORT, () => console.log(`Server listening to port: ${PORT}...`));