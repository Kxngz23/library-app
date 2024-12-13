require('dotenv').config(); // Load .env file

const express = require('express');
const connectDB = require('./config/db'); // Database connection
const bookRoutes = require('./routes/bookRoutes'); // Import book routes
const authRoutes = require('./routes/authRoutes'); // Import auth routes

const app = express();

// Use the environment variables
const PORT = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Middleware
app.use(express.json());

// Example test route
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Book routes
app.use('/api/books', bookRoutes); // Register routes with a base path

// Auth routes
app.use('/api/auth', authRoutes); // Register auth routes with a base path

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
