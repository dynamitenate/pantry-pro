import React from 'react';
import ShoppingList from '../shopping-list/ShoppingList.jsx';

class ShoppingListPage extends React.Component {
    render() {
        return (
            <div
                style={{
                    paddingTop: 50,
                    textAlign: 'center'
                }}
            >
                <ShoppingList
                    style={{
                        width: 500,
                        height: 500
                    }}  
                />
            </div>
        );
    }
}

export default ShoppingListPage;