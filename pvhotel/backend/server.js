const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const FILE_PATH = './users.json';

// Endpoint to handle user registration
app.post('/register', (req, res) => {
  const newUser = req.body;

  // Read existing users from the JSON file
  fs.readFile(FILE_PATH, (err, data) => {
    if (err && err.code !== 'ENOENT') {
      return res.status(500).send('Error reading user data.');
    }

    const users = data ? JSON.parse(data) : [];
    
    // Check if the user already exists
    const existingUser = users.find(user => user.username === newUser.username);
    if (existingUser) {
      return res.status(400).send('User already exists.');
    }

    users.push(newUser);

    // Write updated users back to the JSON file
    fs.writeFile(FILE_PATH, JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Error saving user data.');
      }

      res.status(201).send('User registered successfully!');
    });
  });
});

// Endpoint to handle user login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    // Log the incoming request
    console.log("Login request received:", { username, password });
  
    // Read existing users from the JSON file
    fs.readFile(FILE_PATH, (err, data) => {
      if (err && err.code !== 'ENOENT') {
        console.error("Error reading user data:", err);
        return res.status(500).send('Error reading user data.');
      }
  
      const users = data ? JSON.parse(data) : [];
  
      // Log the users loaded from the JSON file
      console.log("Loaded users:", users);
  
      // Check if the user exists and the password matches
      const user = users.find(
        (user) => user.username === username && user.password === password
      );
  
      if (user) {
        console.log("Login successful for:", username);
        res.status(200).send('Login successful!');
      } else {
        console.log("Invalid credentials for:", username);
        res.status(401).send('Invalid username or password.');
      }
    });
  });
  
// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
