import React from 'react';
import Card from '../common/Card.jsx';
import ShoppingListItem from './ShoppingListItem.jsx';
import ShoppingListAddButton from './ShoppingListAddButton.jsx';

class ShoppingList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: [
                'one',
                'two',
                'three'
            ]
        }
        this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
    }

    handleAddButtonClick() {
        console.log('clicked');
    }

    render() {
        return (
            <Card
                className={'shopping-list-default'}
                style={this.props.style}
            >
                <ShoppingListAddButton
                    onClick={this.handleAddButtonClick}
                />
                {this.state.items.map(item => <ShoppingListItem value={item}/>)}
            </Card>
        );
    }
}

export default ShoppingList;