const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

const appSettings = require('../appSettings.json');
const apiKey = appSettings.spoonacular.apiKey;
const apiAddress = appSettings.spoonacular.apiAddress;

router.get('/food/search', (req, res) => {
    let spoon_url = `${apiAddress}/food/products/search?apiKey=${apiKey}&${req.query.query}`;
    fetch(spoon_url)
        .then(response => response.json())
        .then(json => res.json(json));
})

module.exports = router;