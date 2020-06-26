import React from 'react';
import Card from '../common/Card.jsx';
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
                <Card
                    style={{
                        width: 650,
                        height: 650,
                        padding: '15px 0px'
                    }}
                >
                    <ShoppingList />
                </Card>
            </div>
        );
    }
}

export default ShoppingListPage;