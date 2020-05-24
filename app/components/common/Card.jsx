import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div
                className={this.props.className ? `card-default ${this.props.className}` : 'card-default'}
                style={this.props.style}
            >
                {this.props.children}
            </div>
        )
    }
}

export default Card;