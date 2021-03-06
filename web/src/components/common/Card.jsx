import React from 'react';
import './Common.css';

class Card extends React.Component {
    render() {
        return (
            <div
                className={this.props.className ? `card ${this.props.className}` : 'card'}
                style={this.props.style}
            >
                {this.props.children}
            </div>
        )
    }
}

export default Card;