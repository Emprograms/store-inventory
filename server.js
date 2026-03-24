const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// MongoDB connection
const mongoURI = 'your_mongodb_connection_string_here'; // Replace with your MongoDB URI
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Routes
app.use('/api/auth', require('./routes/auth')); // Authentication routes
app.use('/api/products', require('./routes/products')); // Product routes
app.use('/api/inventory', require('./routes/inventory')); // Inventory routes

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
