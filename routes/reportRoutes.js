const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.json({ message: 'Report received', report: req.body });
});

module.exports = router;
