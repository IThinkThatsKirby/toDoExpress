const express = require('express');
const router = express.Router();
const client = require('../db/index');

// Routes
//get all rewards
router.get('/', async (req, res) => {
  try {
    const { rows } = await client.query('SELECT * FROM rewards;');
    res.json(rows);
  } catch (error) {
    console.log(error.message);
  }
});

//get one reward
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const reward = await client.query(
      'SELECT * FROM rewards WHERE reward_id = $1',
      [id]
    );
    res.json(reward.rows);
  } catch (error) {
    console.log(error.message);
  }
});

//create a reward
router.post('/', async (req, res) => {
  try {
    const { reward_poki_id } = req.body;
    const newReward = await client.query(
      'INSERT INTO rewards (reward_poki_id) VALUES ($1) RETURNING *',
      [reward_poki_id]
    );
    res.json(newReward.rows);
  } catch (error) {
    console.log(error.message);
  }
});

//edit a reward
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { reward_poki_id } = req.body;

    const updatereward = await client.query(
      'UPDATE rewards SET reward_poki_id = $1 WHERE reward_id = $2',
      [reward_poki_id, id]
    );

    res.json('Reward was updated.');
  } catch (error) {
    console.log(error.message);
  }
});

//delete a reward
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletereward = await client.query(
      'DELETE FROM rewards WHERE reward_id = $1',
      [id]
    );
    res.json('Reward deleted');
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
