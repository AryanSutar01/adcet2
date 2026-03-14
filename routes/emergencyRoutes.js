const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.json({ message: 'Emergency alert received', alert: req.body });
});

module.exports = router;
