import React from 'react';

class Button extends React.Component {
    render() {
        return (
            <button
                className={this.props.className ? `button-default ${this.props.className}` : 'button-default'}
                style={this.props.style}
                onClick={this.props.onClick}
            >
                {this.props.children}
            </button>
        )
    }
}

export default Button;