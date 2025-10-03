// Load environment variables from a .env file
require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();
const PORT = 8000;

// Get the API Key from environment variables
const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
    console.error("ERROR: GEMINI_API_KEY is not defined in your .env file.");
    process.exit(1); 
}

app.get('/api/key', (req, res) => {
    res.json({ apiKey: apiKey });
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log("Open this URL in your browser to use the tool.");
});