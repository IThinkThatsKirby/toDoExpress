require('dotenv').config();
const PG_CONNECTION = process.env.PG_CONNECTION;
const { Client } = require('pg');
const client = new Client({
	connectionString: PG_CONNECTION,
	ssl: {
		rejectUnauthorized: false,
	},
});

const testGet = async (req, res) => {
	const { rows } = await client.query('SELECT * FROM actor;');

	res.send(rows[0]);
};

module.exports = { client, testGet };
