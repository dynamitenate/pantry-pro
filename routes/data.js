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
            console.log(`Retrieved Shopping List with \"${data.body.length}\" items`);
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
                console.log(data.body[0]);
                res.json(data.body[0]);
                console.log(`Added \"${data.body[0].product_name}\" to Shopping List`);
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
            console.log(`Updated item with id \"${data.body.id}\" to have properties \"${data.body}\" in Shopping List`);
        })
        .catch(error => console.error('Error updating shopping list item: ', error));
});

module.exports = router;