const express = require('express');
const router = express.Router();
const client = require('../db/index');

// Routes
//get all chores
//Might not use this at any point
router.get('/', async (req, res) => {
  try {
    const { rows } = await client.query('SELECT * FROM user_chores;');
    res.json(rows);
  } catch (error) {
    console.log(error.message);
  }
});

// Seeding Pokemon as rewards
// router.get('/seedRewards', async (req, res) => {
//   for (let i = 1; i < 899; i++) {
//     try {
//       const addReward = await client.query(
//         'INSERT INTO rewards (reward_poki_id) VALUES ($1) RETURNING *',
//         [i]
//       );
//       console.log(i);
//     } catch (error) {
//       console.log(error.message);
//     }
//   }
// })

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
    const { chore_name, chore_description, user_id } = req.body;
    const newChore = await client.query(
      'INSERT INTO chores (chore_name, chore_description, user_id) VALUES ($1, $2, $3) RETURNING *',
      [chore_name, chore_description, user_id]
    );
    const { chore_id } = newChore.rows[0];
    const newUserChore = await client.query(
      'INSERT INTO user_chores (user_id, chore_id) VALUES ($1, $2) RETURNING *',
      [user_id, chore_id]
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
    const { chore_name, chore_description, user_id, chore_done } = req.body;

    const updateChore = await client.query(
      'UPDATE chores SET chore_name = $1, chore_description = $2, user_id = $3, chore_done = $4 WHERE chore_id = $5',
      [chore_name, chore_description, user_id, chore_done, id]
    );
    if (chore_done) {
      reward_id = Math.ceil((Math.random() * 898)) // Poke API has 898 possible pokemon on 05/19/22
      const giveReward = await client.query(
        'INSERT INTO user_rewards (user_id, reward_id) VALUES ($1, $2) RETURNING *',
        [user_id, reward_id]
      );
      // res.json(giveReward)
    }

    res.json('Chore was updated.');
  } catch (error) {
    console.log(error.message);
  }
});

//delete a chore
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteChore = await client.query(
      'DELETE FROM chores WHERE chore_id = $1',
      [id]
    );
    res.json('Chore deleted');
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
