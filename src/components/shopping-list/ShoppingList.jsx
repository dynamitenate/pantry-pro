import React from 'react';
import Card from '../common/Card.jsx';
import ShoppingListItem from './ShoppingListItem.jsx';
import Button from '../common/Button.jsx';
import Input from '../common/Input.jsx';

class ShoppingList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: '',
            items: []
        }
        this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        fetch(window.location.origin + '/data/list')
            .then(res => res.json())
            .then(json => {
                let names = json.map(item => item.product_name);
                this.setState({ items: names });
            });
    }

    handleAddButtonClick() {
        fetch(window.location.origin + '/data/list', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ product_name: this.state.input })
        })
            .then(res => res.json())
            .then(data => {
                this.setState(state => {
                    let items = [...state.items, data[0].product_name];
                    return { input: '' , items };
                });
            })
    }

    handleInputChange(input) {
        this.setState({ input });
    }

    render() {
        return (
            <Card
                className={'shopping-list'}
                style={this.props.style}
            >
                <div
                    style={{ display: 'flex' }}
                >
                    <Button
                        className={'shopping-list-add-button'}
                        style={{
                            width: 50,
                            height: 50
                        }}
                        onClick={this.handleAddButtonClick}
                    >
                    </Button>
                    <Input
                        className={'shopping-list-input'}
                        style={{
                            height: 45,
                            width: 420
                        }}
                        value={this.state.input}
                        onChange={event => this.handleInputChange(event.target.value)}
                        placeholder={'Add item'}
                    />
                </div>
                {this.state.items.map((item, index) => <ShoppingListItem key={index} value={item}/>)}
            </Card>
        );
    }
}

export default ShoppingList;