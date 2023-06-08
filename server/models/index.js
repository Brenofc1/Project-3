require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');

const User = require('./User');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/IT-service');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const newUser = await User.create({ username, email, password });

    // Return a success response
    res.status(200).json({ message: 'Signup successful', user: newUser });
  } catch (error) {
    // Handle errors and return an error response
    res.status(500).json({ error: 'Signup failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
