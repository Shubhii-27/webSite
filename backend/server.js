const express = require('express');
const dotenv = require('dotenv');
const cors = require("cors"); 
const connectDB = require('./config/db'); // db.js path
const authRoutes = require('./routes/auth');
const contactRoutes = require('./routes/contact');

dotenv.config();

const app = express();
// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);

// Connect Database
connectDB();

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));