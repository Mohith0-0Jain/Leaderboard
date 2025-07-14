const express = require('express');
const connectDB = require('./db');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const userRoutes = require('./routes/userRoutes');
// Middlewares
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Dummy Route
app.get("/", (req, res) => {
  res.send("Leaderboard API running");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// routes start
app.use('/api', userRoutes);
