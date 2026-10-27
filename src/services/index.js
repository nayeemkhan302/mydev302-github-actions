const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Health Check
app.get('/', (req, res) => {
    res.json({
        status: 'success',
        message: 'Node server is running ...'
    });
});

// Sample API
app.get('/api/users', (req, res) => {
    res.json([
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' }
    ]);
});

// POST API
app.post('/api/users', (req, res) => {
    const user = req.body;

    res.status(201).json({
        message: 'User created successfully',
        data: user
    });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});