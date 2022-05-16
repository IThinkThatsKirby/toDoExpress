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

// // Routes
// app.get('/', async (req, res) => {
//   const { rows } = await client.query('SELECT * FROM chores;');
//   res.json(rows);
// });

// app.post('/', async (req, res) => {
//   try {
//     const { chore_name, completed, confirmed } = req.body;
//     const newChore = await client.query(
//       'INSERT INTO chores (chore_name, completed, confirmed) VALUES ($1, $2, $3) RETURNING *',
//       [chore_name, completed, confirmed]
//     );
//     res.json(newChore);
//   } catch (error) {
//     console.log(error.message);
//   }
// });

//404 handling
app.get('*', (req, res) => {
  res.json('Error 404');
});

// Listen
app.listen(PORT, () => {
  console.log(`ALIVE ${PORT}`);
});
