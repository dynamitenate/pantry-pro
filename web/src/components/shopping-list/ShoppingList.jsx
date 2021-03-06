import React from 'react';
import ShoppingListItem from './ShoppingListItem.jsx';
import Button from '../common/Button.jsx';
import Input from '../common/Input.jsx';
import { getShoppingListData, addShoppingListData, updateShoppingListData, deleteShoppingListData } from '../../api/shoppingList.js';
import Scrollbox from '../common/Scrollbox.jsx';
import './ShoppingList.css';

class ShoppingList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: "",
            items: []
        }
    }

    componentDidMount() {
        getShoppingListData()
            .then(data => {
                let items = data.map(item => {
                    return { 
                        id: item.id,
                        value: item.product_name,
                        checked: item.checked
                    }
                });
                items.sort((a, b) => a.id - b.id);
                this.setState({ items });
            });
    }

    handleAddButtonClick() {
        if (this.state.input) {
            addShoppingListData(this.state.input)
                .then(data => {
                    this.setState(state => {
                        let items = [
                            ...state.items,
                            {
                                id: data.id,
                                value: data.product_name,
                                checked: data.checked
                            }
                        ];
                        return { input: "", items };
                    });
                });
        }
    }

    handleInputChange(event) {
        let input = event.target.value;
        this.setState({ input });
    }

    handleInputKeyDown(event) {
        if (event.key === "Enter") {
            this.handleAddButtonClick();
        }
    }

    handleItemCheckedOff(item) {
        if (!item.checked) {
            updateShoppingListData({
                id: item.id,
                value: item.value,
                checked: true
            })
                .then(data => {
                    this.setState(state => {
                        let index = state.items.findIndex(i => i.id === item.id);
                        state.items[index].checked = true;
                        return state;
                    });
                });
        }
    }

    handleItemDeleted(id) {
        deleteShoppingListData(id)
            .then(data => {
                this.setState(state => {
                    return {
                        items: state.items.filter(i => i.id != id)
                    }
                });
            });
    }

    render() {
        return (
            <div
                className={'shopping-list'}
                style={this.props.style}
            >
                <div
                    style={{
                        display: 'flex',
                        flexFlow: 'column',
                        height: '100%'
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flex: '0 1 50px',
                            padding: '0px 15px'
                        }}
                    >
                        <Button
                            className={'shopping-list-add-button'}
                            style={{
                                width: 50,
                                height: 50
                            }}
                            onClick={() => this.handleAddButtonClick()}
                        >
                        </Button>
                        <Input
                            className={'shopping-list-input'}
                            style={{
                                flexGrow: 1,
                                height: 50,
                                marginLeft: 10
                            }}
                            value={this.state.input}
                            placeholder={'Add item'}
                            onChange={event => this.handleInputChange(event)}
                            onKeyDown={event => this.handleInputKeyDown(event)}
                        />
                    </div>
                    <Scrollbox
                        style={{
                            flex: '1 1 auto',
                            marginTop: 15,
                            overflow: 'hidden auto'
                        }}
                        suppressInsetShadows
                    >
                        <div style={{ padding: '0px 10px' }}>
                            {this.state.items.map(item => {
                                return(
                                    <ShoppingListItem
                                        key={item.id}
                                        value={item.value}
                                        checked={item.checked}
                                        onCheckClick={() => this.handleItemCheckedOff(item)}
                                        onDeleteClick={() => this.handleItemDeleted(item.id)}
                                    />
                                )
                            })}
                        </div>
                    </Scrollbox>
                </div>
            </div>
        );
    }
}

export default ShoppingList;