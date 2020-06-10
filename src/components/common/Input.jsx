import React from 'react';
import './Common.css';

class Input extends React.Component {
    render() {
        return (
            <input
                className={this.props.className ? `input ${this.props.className}` : 'input'}
                style={this.props.style}
                value={this.props.value}
                placeholder={this.props.placeholder}
                onChange={event => this.props.onChange(event)}
                onKeyDown={event => this.props.onKeyDown(event)}
            />
        )
    }
}

export default Input;