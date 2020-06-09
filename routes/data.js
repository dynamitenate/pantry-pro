const express = require('express');
const fetch = require('node-fetch');
const { createClient }  = require('@supabase/supabase-js')

const router = express.Router();

const appSettings = require('../appSettings.json');
const apiKey = appSettings.supabase.apiKey;
const apiAddress = appSettings.supabase.apiAddress;
const supabase = createClient(apiAddress, apiKey);

router.get('/list', (req, res) => {
    supabase
        .from('shopping_list')
        .select('product_name')
        .then(items => res.json(items.body))
        .catch(error => console.log('Error retreiveing shopping list items: ', error));
})

router.post('/list', (req, res) => {
    supabase
        .from('shopping_list')
        .insert([
            {'product_name': req.body.product_name}
        ])
        .then(data => res.json(data.body))
        .catch(error => console.log('Error adding shopping list items: ', error));
})

module.exports = router;