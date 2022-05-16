//dependencies
const express = require('express');
const app = express();
// const db = require('./db');
const { Client } = require('pg');

// Middleware/Configuration
require('dotenv').config();
app.use(express.json());

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

client.query(
  'SELECT table_schema,table_name FROM information_schema.tables;',
  (err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
      console.log(JSON.stringify(row));
    }
    client.end();
  }
);

// Controllers
const choresController = require('./controllers/chores_controller.js');
app.use('/chores', choresController);

// Routes
app.get('/', (req, res) => {
  try {
    res.send('Hello there. GENERAL KENOBI!');
  } catch (error) {
    console.log(error);
  }
});

// Listen
app.listen(process.env.PORT, () => {
  console.log(`ALIVE ${process.env.PORT}`);
});
