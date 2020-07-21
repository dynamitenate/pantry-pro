import React from 'react';
import './Common.css';

class Input extends React.Component {
    render() {
        return (
            <div
                style={{
                    width: '100%'
                }}
            >
                <input
                    className={this.props.className ? `input ${this.props.className}` : 'input'}
                    style={this.props.style}
                    value={this.props.value}
                    placeholder={this.props.placeholder}
                    onChange={event => this.props.onChange ? this.props.onChange(event) : undefined}
                    onKeyDown={event => this.props.onKeyDown ? this.props.onKeyDown(event) : undefined}
                />
                {this.props.autocomplete && (
                    this.props.autocomplete.length == 0
                        ? <div>{"None"}</div>
                        : <ul
                            style={{
                                listStyle: 'none',
                                margin: 0,
                                padding: 0,
                                position: 'relative',
                                width: '100%',
                                border: '1px solid red'
                            }}
                        >
                            {this.props.autocomplete.map(a => {
                                return (
                                    <li>
                                        {a}
                                    </li>
                                )
                            })}
                        </ul>
                )}
            </div>
        )
    }
}

export default Input;