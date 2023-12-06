const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/logindatal', { useNewUrlParser: true, useUnifiedTopology: true });

// Create a User model
const User = mongoose.model('User', {
  username: String,
  password: String
});

// Middleware for parsing JSON
app.use(bodyParser.json());

// Serve HTML files
app.use(express.static('public'));

// Check login credentials
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user by username
    const user = await User.findOne({ username });

    // If the user exists, check the password
    if (user && bcrypt.compareSync(password, user.password)) {
      res.redirect('/home.html');
    } else {
      res.send('Invalid credentials. Please try again.');
    }
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
