require('dotenv').config();
const express = require('express');
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
const text = 'Hello World!';
const createChore = (req, res, next) => {
	// const id = parseInt(req.params.id);
	const chore = text;
	client.query('INSERT INTO chores', [chore], (err, res) => {
		if (err) {
			throw err;
		}
		console.log(res);
	});
};

module.exports = {
	createChore,
};
