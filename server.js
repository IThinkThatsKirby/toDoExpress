//dependencies
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;

// make connection
const client = require('./db/index');
client.connect();

// Middleware
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// Controllers
const choresController = require('./controllers/chores_controller.js');
app.use('/chores', choresController);

const usersController = require('./controllers/users_controller.js');
app.use('/users', usersController);

//404 handling
app.get('*', (req, res) => {
  res.json('Error 404');
});

// Listen
app.listen(PORT, () => {
  console.log(`ALIVE ${PORT}`);
});
