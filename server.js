const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

//Middleware
app.use(bodyParser.json());
const DATA_FILE = './data/vans.json';

// Helper function to read JSON data
const readData = () => JSON.parse(fs.readFileSync(DATA_FILE));

// Helper function to write JSON data
const writeData = (data) => fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 4));

// GET ALL VANS 
app.get('/api/vans', (req, res) => {
    const data = readData();
    res.status(200).json(data);
});


// Start the Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
});
