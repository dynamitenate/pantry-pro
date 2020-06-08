const express = require('express');
const fetch = require('node-fetch');
const { createClient }  = require('@supabase/supabase-js')

const router = express.Router();

const appSettings = require('../appSettings.json');
const apiKey = appSettings.supabase.apiKey;
const apiAddress = appSettings.supabase.apiAddress;
const supabase = createClient(apiAddress, apiKey);

const getShoppingList = async () => {
    try {
        let items = await supabase
            .from('shopping_list')
            .select('product_name');
        return items;
    } catch (error) {
        console.log('Error: ', error);
    }
}

router.get('/list', (req, res) => {
    getShoppingList()
        .then(items => res.json(items.body));
})

module.exports = router;