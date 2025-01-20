const express = require('express');
const cors = require('cors');
const authRoutes = require('./src/routes/authRoutes');
const chatRoutes = require('./src/routes/chatRoutes');
const roomRoutes = require('./src/routes/roomRoutes');

// Initialize Express App
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/chats', chatRoutes);
app.use('/api/rooms', roomRoutes);

module.exports = app;
