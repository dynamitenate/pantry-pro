const express = require('express');
const app = express();

// Require routes in ./routes
app.use('/spoonacular', require('./routes/spoonacular,js'));

// Setup home directory
app.use(express.static(__dirname + '/dist'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
});

// Start server
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
