export const getShoppingListData = async () => {
    console.log("Retrieving Shopping List...");
    let response = await fetch(window.location.origin + '/data/list')
    let data = await response.json();
    console.log(`Retrieved Shopping List with \"${data.length}\" items`);
    return data;
};

export const addShoppingListData = async (input) => {
    console.log(`Adding \"${input}\" to Shopping List...`);
    let response = await fetch(window.location.origin + '/data/list', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product_name: input })
    });
    let data = await response.json();
    console.log(`Added \"${input}\" to Shopping List`);
    return data;
};