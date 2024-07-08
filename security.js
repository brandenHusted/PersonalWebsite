const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

let users = [];
let loginCodes = {};

app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  console.log('Received registration request:', { email, password }); // Debugging
  
  const userExists = users.find(user => user.email === email);
  if (userExists) {
    console.log('Email already registered'); // Debugging
    return res.status(400).json({ success: false, message: 'Email already registered.' }); 
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
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

  const user = users.find(user => user.email === email);
  if (!user) {
    console.log('User not found'); // Debugging
    return res.status(400).json({ success: false, message: 'User not found.' });
  }

  try {
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      const code = crypto.randomBytes(3).toString('hex');
      loginCodes[email] = code;
      console.log('Login successful, code generated:', code); // Debugging
      res.status(200).json({ success: true, code });
    } else {
      console.log('Invalid password'); // Debugging
      res.status(400).json({ success: false, message: 'Invalid password.' });
    }
  } catch (error) {
    console.error('Error comparing password:', error); // Debugging
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.post('/code-login', (req, res) => {
  const { email, code } = req.body;
  console.log('Received code login request:', { email, code }); // Debugging

  if (loginCodes[email] && loginCodes[email] === code) {
    delete loginCodes[email]; // Remove code after successful login
    console.log('Code login successful'); // Debugging
    res.status(200).json({ success: true });
  } else {
    console.log('Invalid login code'); // Debugging
    res.status(400).json({ success: false, message: 'Invalid login code.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});








