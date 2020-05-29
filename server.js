const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
const fetch = require('node-fetch');
const appSettings = require('./appSettings.json')

app.use(express.static(__dirname + '/dist'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
});
app.get('/api/*', (req, res) => {
    let [ path, query ] = req.url.split('?');
    path = path.substring(4);
    let spoon_url = 'https://api.spoonacular.com' + path + '?apiKey=' + appSettings.spoonacular.key + '&' + query;
    fetch(spoon_url)
        .then(response => response.json())
        .then(json => res.json(json));
})
app.listen(port);
