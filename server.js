require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Controllers
const choresController = require('./controllers/chores_controller.js')
app.use('/chores', choresController)

// Routes
app.get('/', (req, res) => {
	res.send('Get the right address, scrub')
})

app.get('*', (req, res) => {
  res.send('Error 404')
})

// Listen
app.listen(PORT, () => {
	console.log(`ALIVE ${PORT}`);
});
