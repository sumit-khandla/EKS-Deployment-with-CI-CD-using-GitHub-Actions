const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
    res.send('Hello, EKS CI-CD GitHub API!');
});

// Sample GET endpoint
app.get('/api', (req, res) => {
    res.json({ message: 'Welcome to the API', status: 'success' });
});

// Sample POST endpoint
app.post('/api', (req, res) => {
    const { name } = req.body;
    res.json({ message: `Hello, ${name}!`, status: 'success' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
