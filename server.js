//dependencies
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;

const initOptions = {
  // Capitalizes all SQL generated
  capSQL: true,
  // global event notification;
  error(error, e) {
    if (e.cn) {
      // A connection-related error;

      // Connections are reported back with the password hashed,
      // for safe errors logging, without exposing passwords.
      console.log('CN:', e.cn);
      console.log('EVENT:', error.message || error);
    }
  },
  // this is to be commited for debugging purposes, but left commented out until you need it
  // if un-commented, it will print out the resulting query when any query is ran
  query(e) {
    console.log(e.query);
  },
};

const pgp = require('pg-promise')(initOptions);
const db = pgp(process.env.POSTGRES_URI);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Controllers
const choresController = require('./controllers/chores_controller.js');
app.use('/chores', choresController);

// Routes
app.get('/', (req, res) => {
  res.send('Get the right address, scrub');
});

app.get('*', (req, res) => {
  res.send('Error 404');
});

// Listen
app.listen(PORT, () => {
  console.log(`ALIVE ${PORT}`);
});
