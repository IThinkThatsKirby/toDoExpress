require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.get('/testing', (req, res) => {
	res.send('GsdfsdfETTesting');
	console.log('Testing');
});

app.post('/testing', (req, res) => {
	res.send('postTesting');
});

app.put('/testing', (req, res) => {
	res.send('puttesting');
});

app.delete('/testing', (req, res) => {
	res.send('deleattesting');
});

app.listen(PORT, () => {
	console.log(`ALIVE ${PORT}`);
});
