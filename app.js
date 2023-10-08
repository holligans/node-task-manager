const connectDB = require("./db/connect");
const express = require('express');
const tasks = require('./routes/tasks');
const app = express();
require('dotenv').config();
const notFound = require('./middlewares/notFound');

const PORT = 5000;
// middlewares
app.use(express.static('public'));
app.use(express.json());

// routes
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
