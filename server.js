// Pull in dotenv environment vars
require('dotenv').config();

// Initialize Express app
const express = require('express');
const app = express();

// Require routes in ./routes
app.use(express.json())
app.use('/api/spoonacular', require('./routes/spoonacular.js'));
app.use('/api/data', require('./routes/data.js'));

// Setup home directory
app.use(express.static(__dirname + '/web/public'));
app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/web/public/index.html');
});

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
