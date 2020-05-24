import React from 'react';
import Button from '../common/Button.jsx';

class ShoppingListAddButton extends React.Component {
    render() {
        return (
            <Button
                className={'shopping-list-add-button'}
                onClick={this.props.onClick}
            >
            </Button>
        );
    }
}

export default ShoppingListAddButton;