//dependencies
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const pgp = require('pg-promise')({});
const db = pgp(
	'postgres://ibslnpveydtyzi:fdd03db9aad534ebf5ed38bea5efa55292e16ca64cb9c091756fc6033790a996@ec2-52-4-104-184.compute-1.amazonaws.com:5432/d2qi6dve9dt6oc'
);
const { Client } = require('pg');

const client = new Client({
	connectionString:
		'postgres://ibslnpveydtyzi:fdd03db9aad534ebf5ed38bea5efa55292e16ca64cb9c091756fc6033790a996@ec2-52-4-104-184.compute-1.amazonaws.com:5432/d2qi6dve9dt6oc',
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

// Listen
app.listen(PORT, () => {
	console.log(`ALIVE ${PORT}`);
});
