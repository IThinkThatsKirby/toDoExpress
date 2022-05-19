const express = require('express');
const router = express.Router();
const client = require('../db/index');

// Routes
//get all users
router.get('/', async (req, res) => {
	try {
		const { rows } = await client.query('SELECT * FROM users;');
		res.json(rows);
	} catch (error) {
		console.log(error.message);
	}
});

//get one user and all their chore_id from user_chores
router.get('/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const userChores = await client.query(
			'SELECT * FROM chores WHERE chore_id IN(SELECT chore_id FROM user_chores WHERE user_id = $1)',
			[id]
		);
		res.json(userChores.rows);
	} catch (error) {
		console.log(error.message);
	}
});

//create a user
router.post('/', async (req, res) => {
	try {
		const { user_name, role_id } = req.body;
		const newUser = await client.query(
			'INSERT INTO users (user_name, role_id) VALUES ($1, $2) RETURNING *',
			[user_name, role_id]
		);
		res.json(newUser.rows);
	} catch (error) {
		console.log(error.message);
	}
});

//edit a user
router.put('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const { user_name, role_id } = req.body;

		const updateChore = await client.query(
			'UPDATE users SET user_name = $1, role_id = $2 WHERE user_id = $3',
			[user_name, role_id, id]
		);

		res.json('User was updated.');
	} catch (error) {
		console.log(error.message);
	}
});

//delete a user
router.delete('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const deleteUser = await client.query(
			'DELETE FROM users WHERE user_id = $1',
			[id]
		);
		res.json('User deleted');
	} catch (error) {
		console.log(error.message);
	}
});

module.exports = router;
