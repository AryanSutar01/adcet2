const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  return res.json({
    traffic_density: 100,
    weather_condition: { temperature: 23, rainfall: 0 },
    risk_level: 'Low',
  });
});

module.exports = router;
