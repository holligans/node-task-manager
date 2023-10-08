<<<<<<< HEAD
const express = require("express");
const tasks = require("./routes/tasks");
=======
const connectDB = require("./db/connect");
const express = require('express');
const tasks = require('./routes/tasks');
>>>>>>> b0b8c848f4ae00a16be037e38f8364992b68ad55
const app = express();
require('dotenv').config();
const notFound = require('./middlewares/notFound');

const PORT = 5000;
// middlewares
app.use(express.static("public"));
app.use(express.json());

// routes
<<<<<<< HEAD
app.use("/api/v1/tasks", tasks);

app.get("/hello", (req, res) => {
  res.status(200).send("Task Manager");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server listening to port: ${PORT}...`));
=======
app.use('/api/v1/tasks', tasks);
app.use(notFound);

const start = async() => {
    try {
        await connectDB(process.env.MONGODB_CONNECTION_URL);
        app.listen(PORT, () => console.log(`Server listening to port: ${PORT}...`));
    } catch (error) {
        console.log(error)
    }
}
start();
>>>>>>> b0b8c848f4ae00a16be037e38f8364992b68ad55
