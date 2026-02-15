const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load env vars
dotenv.config();

const agentRoutes = require('./routes/agentRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/agent', agentRoutes);
app.get('/', (req, res) => {
  res.send('API is running...');
});

module.exports = app;
