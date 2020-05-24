import React from 'react';

class Input extends React.Component {
    render() {
        return (
            <input
                className={this.props.className ? `input ${this.props.className}` : 'input'}
                style={this.props.style}
                onChange={event => this.props.onChange(event)}
                placeholder={this.props.placeholder}
            />
        )
    }
}

export default Input;