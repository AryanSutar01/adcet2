const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  return res.json({ message: 'Traffic data received', data: req.body });
});

router.get('/', (req, res) => {
  return res.json({ message: 'Traffic endpoint is active' });
});

module.exports = router;
