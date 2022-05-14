const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Testing general get');
});

router.get('/testing', (req, res) => {
  res.send('GsdfsdfETTesting');
  console.log('Testing');
});

router.post('/testing', (req, res) => {
  res.send('postTesting');
});

router.put('/testing', (req, res) => {
  res.send('puttesting');
});

router.delete('/testing', (req, res) => {
  res.send('deletetesting');
});

module.exports = router;
