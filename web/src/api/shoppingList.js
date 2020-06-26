export const getShoppingListData = async () => {
    let response = await fetch(window.location.origin + '/api/data/list')
    let data = await response.json();
    return data;
};

export const addShoppingListData = async (input) => {
    let response = await fetch(window.location.origin + '/api/data/list', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product_name: input })
    });
    let data = await response.json();
    return data;
};

export const updateShoppingListData = async (item) => {
    let response = await fetch(window.location.origin + '/api/data/list', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: item.id,
            product_name: item.value,
            checked: item.checked
        })
    });
    let data = await response.json();
    return data;
}

export const deleteShippingListData = async (id) => {
    let response = await fetch(window.location.origin + '/api/data/list', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: id
        })
    });
    let data = await response.json();
    return data;
}