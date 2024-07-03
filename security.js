const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

let users = [];

app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  console.log('Received registration request:', { email, password }); // Debugging
  
  // Check if the email is already registered
  const userExists = users.find(user => user.email === email);
  if (userExists) {
    console.log('Email already registered'); // Debugging
    // 400 bad request
    return res.status(400).json({ success: false, message: 'Email already registered.' }); 
  }

  // Hash the password before storing it
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    // Store the new user
    users.push({ email, password: hashedPassword });
    console.log('User registered successfully:', { email }); // Debugging
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error hashing password:', error); // Debugging
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log('Received login request:', { email, password }); // Debugging

  // Find the user by email
  const user = users.find(user => user.email === email);
  if (!user) {
    console.log('User not found'); // Debugging
    return res.status(400).json({ success: false, message: 'User not found.' });
  }

  // Compare the password
  try {
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      console.log('Login successful'); // Debugging
      res.status(200).json({ success: true });
    } else {
      console.log('Invalid password'); // Debugging
      res.status(400).json({ success: false, message: 'Invalid password.' });
    }
  } catch (error) {
    console.error('Error comparing password:', error); // Debugging
    // internal server error
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});






