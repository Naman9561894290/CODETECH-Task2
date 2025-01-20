const http = require('http');
const dotenv = require('dotenv'); // Import dotenv to load environment variables
const app = require('./app');
const connectDB = require('./src/config/db');
const configureSocket = require('./src/config/socket');

// Load environment variables from .env file
dotenv.config();

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Create HTTP server and configure Socket.IO
const server = http.createServer(app);
configureSocket(server);

// Start server
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
