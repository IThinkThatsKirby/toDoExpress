const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('GsdfsdfETTesting');
  console.log('Testing');
});

router.post('/', async (req, res) => {
  try {
    console.log(req.body);
  } catch (error) {
    console.log(error.message);
  }
});

router.put('/', (req, res) => {
  res.send('puttesting');
});

router.delete('/', (req, res) => {
  res.send('deletetesting');
});

module.exports = router;
