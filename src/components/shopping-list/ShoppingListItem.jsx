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
                    display: 'flex',
                    position: 'relative',
                    padding: '10px 0px'
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
                        position: 'absolute',
                        left: this.state.hover ? 30 : 0,
                        paddingLeft: 10,
                        minWidth: 30
                    }}
                >
                    {this.props.value}
                </div>
            </div>
        );
    }
}

export default ShoppingListItem;