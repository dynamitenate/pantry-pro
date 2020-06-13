import React from 'react';
import Button from '../common/Button.jsx';

class ShoppingListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.checked !== this.props.checked || nextProps.value !== this.props.value) {
            return true;
        }
        if (nextState.hover !== this.state.hover) {
            return true;
        }
        return false
    }

    render() {
        return (
            <div
                className={'shopping-list-item'}
                style={{
                    padding: 10,
                    whiteSpace: 'nowrap'
                }}
                onMouseEnter={() => this.setState({ hover: true })}
                onMouseLeave={() => this.setState({ hover: false })}
            >
                <Button
                    className={'shopping-list-item-check-button'}
                    style={{
                        width: 30,
                        height: 30,
                        marginRight: 10
                    }}
                    onClick={() => this.props.onCheckClick()}
                >  
                </Button>
                <div
                    className={`shopping-list-item-content ${this.props.checked ? 'shopping-list-item-content-checked' : undefined}`}
                    style={{
                        display: 'inline-block',
                        paddingLeft: 10,
                        width: '100%',
                        transform: `translateX(${this.state.hover ? "0px" : "-40px"})`
                    }}
                >
                    {this.props.value}
                </div>
            </div>
        );
    }
}

export default ShoppingListItem;