const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

// Load env vars
dotenv.config();

// Express app
const app = express();
app.use(cors());
app.use(express.json());

// Optional DB connection
const dbPath = path.join(__dirname, 'config', 'db.js');
if (fs.existsSync(dbPath)) {
  try {
    require('./config/db');
    console.log('Database module loaded');
  } catch (err) {
    console.warn('Database module exists but failed to initialize:', err.message);
  }
} else {
  console.warn('No config/db.js found; skipping DB connection.');
}

// Load optional route modules safely
const routeMap = {
  '/api/traffic': './routes/trafficRoutes',
  '/api/weather': './routes/weatherRoutes',
  '/api/dashboard': './routes/dashboardRoutes',
  '/api/report': './routes/reportRoutes',
  '/api/emergency': './routes/emergencyRoutes',
};

for (const [route, modulePath] of Object.entries(routeMap)) {
  const fullPath = path.join(__dirname, modulePath + '.js');
  if (fs.existsSync(fullPath)) {
    try {
      app.use(route, require(modulePath));
    } catch (err) {
      console.warn(`Could not mount ${route} from ${modulePath}:`, err.message);
    }
  }
}

app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', source: 'Vercel-ready backend' });
});

app.get('/', (req, res) => {
  res.json({ message: 'Smart AI-Based Traffic Safety & Management System API Running' });
});

const PORT = process.env.PORT || 5000;

if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
