import React from 'react';
import Button from '../common/Button.jsx';

class ShoppingListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        }
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.checked !== this.props.checked || nextProps.value !== this.props.value) {
            return true;
        }
        return false
    }

    render() {
        console.log(this.props);
        return (
            <div
                className={'shopping-list-item'}
                style={this.props.checked
                    ? { color: '#c1c1c1', textDecoration: 'line-through' }
                    : undefined
                }
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
                {this.props.value}
            </div>
        );
    }
}

export default ShoppingListItem;