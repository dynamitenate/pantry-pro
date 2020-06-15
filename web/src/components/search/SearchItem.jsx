import React from 'react';
import Button from '../common/Button.jsx';

class SearchItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
    }

    handleAddButtonClick() {
        fetch(window.location.origin + '/data/list', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ product_name: this.props.value })
        })
    }

    render() {
        return (
            <div
                className={'search-item'}
            >
                <Button
                    className={'search-add-button'}
                    style={{
                        width: 30,
                        height: 30
                    }}
                    onClick={this.handleAddButtonClick}
                >
                </Button>
                {this.props.value}
            </div>
        );
    }
}

export default SearchItem;
