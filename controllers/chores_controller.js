const express = require('express');
const { Pool } = require('pg/lib');
const router = express.Router();
const client = require('../db/index');

// Routes

//get all chores
router.get('/', async (req, res) => {
  try {
    const { rows } = await client.query('SELECT * FROM chores;');
    res.json(rows);
  } catch (error) {
    console.log(error.message);
  }
});

//get one chore
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const chore = await client.query(
      'SELECT * FROM chores WHERE chore_id = $1',
      [id]
    );
    res.json(chore.rows);
  } catch (error) {
    console.log(error.message);
  }
});

//create a chore
router.post('/', async (req, res) => {
  try {
    const { chore_name, completed, confirmed } = req.body;
    const newChore = await client.query(
      'INSERT INTO chores (chore_name, completed, confirmed) VALUES ($1, $2, $3) RETURNING *',
      [chore_name, completed, confirmed]
    );
    res.json(newChore.rows);
  } catch (error) {
    console.log(error.message);
  }
});

//edit a chore
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { chore_name, completed, confirmed } = req.body;

    const updateChore = await client.query(
      'UPDATE chores SET chore_name = $1, completed = $2, confirmed = $3 WHERE chore_id = $4',
      [chore_name, completed, confirmed, id]
      )

    res.json('Chore was updated.')

  } catch (error) {
    console.log(error.message);
  }
});

//delete a chore
router.delete('/', (req, res) => {
  res.send('deletetesting');
});

module.exports = router;
