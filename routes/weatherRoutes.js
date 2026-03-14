const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  return res.json({ message: 'Weather data received', data: req.body });
});

router.get('/', (req, res) => {
  return res.json({ message: 'Weather endpoint is active' });
});

module.exports = router;
