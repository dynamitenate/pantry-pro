import React from 'react';

class SearchItem extends React.Component {
    render() {
        return (
            <div
                className={'shopping-list-item'}
            >
                {this.props.value}
            </div>
        );
    }
}

export default SearchItem;