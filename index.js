const express = require('express');
const logger = require('./utils/logger');
const routes = require('./routes/index');
const mongoose = require('mongoose');
const config = require('./config/db');
const redis = require('./utils/redis');
const http = require('http');
const socketIo = require('socket.io');
const orderRoutes = require('./controllers/order');

require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Express Middleware
app.use(express.json()); // JSON verisini çözümler
app.use(express.urlencoded({ extended: true })); // URL encoded verisini çözümler

// Log HTTP requests
app.use((req, res, next) => {
    logger.http(`${req.method} - ${req.url}`);
    next();
});

// Redis connection
redis.redisCon();

// Database connection
config.connectDB();

// Add socket.io instance to app
app.set('io', io);

// Socket.io connection
io.on('connection', (socket) => {
    console.log('A user connected');
    
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });

    // Emit test message (optional)
    io.emit('message', 'Test message');
});


// API routes
app.use('/api', routes);

// Start server
server.listen(4000, () => {
    console.log('The server is up and running on port 4000');
});
