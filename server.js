//dependencies
const express = require('express');
const db = require('./db/queries');
const app = express();
const PORT = process.env.PORT;
const PG_CONNECTION = process.env.PG_CONNECTION;
// Database things go here REMEBER TO FIX THE VARIABLES before you DEPLOY
const { Client } = require('pg');
const client = new Client({
	connectionString: PG_CONNECTION,
	ssl: {
		rejectUnauthorized: false,
	},
});

client.connect();

client.query('SELECT * FROM actor;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
});
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Controllers
const choresController = require('./controllers/chores_controller.js');
app.use('/chores', choresController);

// Routes
app.get('/', (req, res) => {
  client.query('SELECT * FROM actor;', (err, res) => {
    console.log(res.rows);
    return res.rows;
  });
  res.send(JSON.stringify(res.row));
});

app.get('*', (req, res) => {
  res.send('Error 404');
});
app.post('/', db.createChore);

// Listen
app.listen(PORT, () => {
  console.log(`ALIVE ${PORT}`);
});
