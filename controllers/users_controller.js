const express = require('express');
const { Pool } = require('pg/lib');
const router = express.Router();
const client = require('../db/index');

// Routes
//get all users
router.get('/', async (req, res) => {
  res.send('GET all test');
  // try {
  //   const { rows } = await client.query('SELECT * FROM chores;');
  //   res.json(rows);
  // } catch (error) {
  //   console.log(error.message);
  // }
});

//get one user
router.get('/:id', async (req, res) => {
  res.send('GET one test');
  // const { id } = req.params;
  // try {
  //   const chore = await client.query(
  //     'SELECT * FROM chores WHERE chore_id = $1',
  //     [id]
  //   );
  //   res.json(chore.rows);
  // } catch (error) {
  //   console.log(error.message);
  // }
});

//create a user
router.post('/', async (req, res) => {
  res.send('POST test');
  // try {
  //   const { chore_name, completed, confirmed } = req.body;
  //   const newChore = await client.query(
  //     'INSERT INTO chores (chore_name, completed, confirmed) VALUES ($1, $2, $3) RETURNING *',
  //     [chore_name, completed, confirmed]
  //   );
  //   res.json(newChore.rows);
  // } catch (error) {
  //   console.log(error.message);
  // }
});

//edit a user
router.put('/:id', async (req, res) => {
  res.send('PUT one test');
  // try {
  //   const { id } = req.params;
  //   const { chore_name, completed, confirmed } = req.body;

  //   const updateChore = await client.query(
  //     'UPDATE chores SET chore_name = $1, completed = $2, confirmed = $3 WHERE chore_id = $4',
  //     [chore_name, completed, confirmed, id]
  //     )

  //   res.json('Chore was updated.')

  // } catch (error) {
  //   console.log(error.message);
  // }
});

//delete a user
router.delete('/:id', async (req, res) => {
  res.send('DELETE one test');
  // try {
  //   const { id } = req.params;
  //   const deleteChore = await client.query(
  //     'DELETE FROM chores WHERE chore_id = $1',
  //     [id]
  //   );
  //   res.json('Chore deleted');
  // } catch (error) {
  //   console.log(error.message);
  // }
});

module.exports = router;
