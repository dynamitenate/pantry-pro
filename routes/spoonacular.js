const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

router.get('/food/search', (req, res) => {
    let spoon_url = `${provess.env.SUPABASE_API_URL}/food/products/search?apiKey=${provess.env.SUPABASE_API_KEY}&query=${req.query.query}`;
    fetch(spoon_url)
        .then(response => response.json())
        .then(json => res.json(json))
        .catch(error => console.log(error));
})

module.exports = router;