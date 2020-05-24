import React from 'react';
import Button from '../common/Button.jsx';

class ShoppingListAddButton extends React.Component {
    render() {
        return (
            <Button
                onClick={this.props.onClick}
            >
                {'Click Me'}
            </Button>
        );
    }
}

export default ShoppingListAddButton;