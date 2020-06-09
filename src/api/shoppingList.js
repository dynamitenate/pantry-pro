export const getShoppingListData = async () => {
    console.log("Retrieving Shopping List...");
    let response = await fetch(window.location.origin + '/data/list')
        .catch(err => {
            console.log(`ERROR: ${err.response.data}`)
        });
    console.log(`Retrieved Shopping List with \"${response.json().length}\" items`);
    return response;
};

export const addShoppingListData = async (input) => {
    console.log(`Adding \"${input}\" to Shopping List...`);
    let response = await fetch(window.location.origin + '/data/list', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product_name: input })
    }).catch(err => {
        console.log(`ERROR: ${err.response.data}`)
    });
    console.log(`Added \"${input}\" to Shopping List`);
    return response;
};