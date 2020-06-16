import React from 'react';
import { Link as DefaultLink } from 'react-router-dom';
import './Common.css';

class Link extends React.Component {
    render() {
        return (
            <DefaultLink
                className={this.props.className ? `link ${this.props.className}` : 'link'}
                style={this.props.style}
                to={this.props.to}
            >
                {this.props.children}
            </DefaultLink>
        )
    }
}

export default Link;