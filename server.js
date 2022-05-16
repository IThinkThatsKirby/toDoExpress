//dependencies
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
// make connection
const { client, testGet } = require('./db/index');
client.connect();
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Controllers
const choresController = require('./controllers/chores_controller.js');
app.use('/chores', choresController);

// Routes
app.get('/', async (req, res) => {
	const { rows } = await client.query('SELECT * FROM actor;');

	res.send(rows[0]);
});
app.get('/1', testGet);
app.get('*', (req, res) => {
	res.send('Error 404');
});

// Listen
app.listen(PORT, () => {
	console.log(`ALIVE ${PORT}`);
});
