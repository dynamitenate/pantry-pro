const express = require('express');
const { createClient }  = require('@supabase/supabase-js')

const router = express.Router();

const supabase = createClient(process.env.SUPABASE_API_URL, process.env.SUPABASE_API_KEY);

router.get('/list', (req, res) => {
    console.log("Retrieving Shopping List...");
    supabase
        .from('shopping_list')
        .select('id, product_name, checked')
        .then(data => {
            res.json(data.body);
        })
        .catch(error => console.error('Error retreiveing shopping list items: ', error));
});

router.post('/list', (req, res) => {
    console.log(`Adding \"${req.body.product_name}\" to Shopping List...`);
    supabase
        .from('shopping_list')
        .insert([
            {
                'product_name': req.body.product_name,
                'checked': false
            }
        ])
        .then(data => {
            if (data.body[0]) {
                res.json(data.body[0]);
            }
        })
        .catch(error => console.error('Error adding shopping list item: ', error));
});

router.put('/list', (req, res) => {
    console.log(`Updating item with id \"${req.body.id}\" to have properties \"${req.body}\" in Shopping List...`);
    supabase
        .from('shopping_list')
        .update({
            'product_name': req.body.product_name,
            'checked': req.body.checked
        })
        .match({
            'id': req.body.id
        })
        .then(data => {
            res.json(data.body);
        })
        .catch(error => console.error('Error updating shopping list item: ', error));
});

router.delete('/list', (req, res) => {
    console.log(`Deleting item with id \"${req.body.id}\" from Shopping List...`);
    supabase
        .from('shopping_list')
        .match({
            'id': req.body.id
        })
        .delete()
        .then(data => {
            res.json(data.body);
        })
        .catch(error => console.error('Error deleting shopping list item: ', error));
});

module.exports = router;