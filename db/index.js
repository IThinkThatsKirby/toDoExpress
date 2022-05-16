require('dotenv').config();
const PG_CONNECTION = process.env.PG_CONNECTION;
const { Client } = require('pg');
const client = new Client({
  connectionString: PG_CONNECTION,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = client;
