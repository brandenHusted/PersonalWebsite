// Imports the express library which is used to make a web server.
const express = require('express');
// Import the body-parser library, which is used to parse incoming request bodies in a middleware.
const bodyParser = require('body-parser');
// Import the CORS (Cross-Origin Resource Sharing) library, which allows your server to handle requests from different origins.
const cors = require('cors');
// Import the bcrypt library, which is used to hash and compare passwords securely.
const bcrypt = require('bcrypt');
// Import the crypto library, which is used for generating secure random values, such as authentication tokens.
const crypto = require('crypto');
const app = express();
const port = 3000;
// Middleware to parse JSON request bodies.
app.use(bodyParser.json());
app.use(cors());

let users = [];
let loginCodes = {};

// Function to validate the password
function validatePassword(password) {
  // Regular expression to check for at least 3 characters and at least one special character
  const regex = /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{3,}$/;
  return regex.test(password);
}

// async documentation https://www.w3schools.com/Js/js_async.asp
app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  console.log('Received registration request:', { email, password }); // Debugging

  const userExists = users.find(user => user.email === email);
  if (userExists) {
    console.log('Email already registered'); // Debugging
    return res.status(400).json({ success: false, message: 'Email already registered.' });
  }

  if (!validatePassword(password)) {
    console.log("Password is invalid"); // Debugging
    return res.status(400).json({ success: false, message: 'Password must be at least 3 characters long and contain at least one special character.' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ email, password: hashedPassword });
    console.log('User registered successfully:', { email }); // Debugging
    // documentation for status(200) https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error hashing password:', error); // Debugging
    // internal server error
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.post('/login', async (req, res) => {
  const { email, password, code } = req.body;
  console.log('Received login request:', { email, password, code }); // Debugging

  const user = users.find(user => user.email === email);

  if (!user) {
    console.log('User not found'); // Debugging
    return res.status(400).json({ success: false, message: 'User not found.' });
  }

  if (code) {
    // If the code is provided, check the code
    if (loginCodes[email] && loginCodes[email] === code) {
      console.log('Login successful with code'); // Debugging
      return res.status(200).json({ success: true });
    } else {
      console.log('Invalid code'); // Debugging
      return res.status(400).json({ success: false, message: 'Invalid code.' });
    }
  }

  // Validate password
  if (!validatePassword(password)) {
    console.log("Password is invalid"); // Debugging
    return res.status(400).json({ success: false, message: 'Password must be at least 3 characters long and contain at least one special character.' });
  }

  try {
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      // Create code for repeated logins to login faster
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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
