const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 3000;


app.use(bodyParser.json());
app.use(cors());

// stored in a JSON file
const USERS_DB = './users.json';

// Helper: Read database
function readUsers() {
    if (!fs.existsSync(USERS_DB)) fs.writeFileSync(USERS_DB, JSON.stringify([]));
    return JSON.parse(fs.readFileSync(USERS_DB));
}

// Helper: Write to database
function writeUsers(users) {
    fs.writeFileSync(USERS_DB, JSON.stringify(users, null, 2));
}

// Signup endpoint
app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    const users = readUsers();

    if (users.some(user => user.email === email)) {
        return res.status(400).json({ message: 'User already exists' });
    }

    users.push({ name, email, password });
    writeUsers(users);

    res.status(200).json({ message: 'Signup successful' });
});

// Login endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const users = readUsers();

    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
