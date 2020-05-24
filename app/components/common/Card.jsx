import React from 'react';

class Card extends React.Component {
    render() {
        console.log(this.props.className);
        return (
            <div
                className={`card-default ${this.props.className}`}
                style={this.props.style}
            >
                {this.props.children}
            </div>
        )
    }
}

export default Card;