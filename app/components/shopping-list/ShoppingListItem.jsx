import React from 'react';

class ShoppingListItem extends React.Component {
    render() {
        return (
            <div>
                {this.props.value}
            </div>
        );
    }
}

export default ShoppingListItem;