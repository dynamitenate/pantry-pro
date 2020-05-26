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
        console.log('mounted');
    }

    handleAddButtonClick() {
        this.setState(state => {
            let items = [...state.items, state.input];
            return { input: '' , items };
        });
    }

    handleInputChange(input) {
        this.setState({ input });
    }

    render() {
        console.log(this.state);
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
                {this.state.items.map(item => <ShoppingListItem value={item}/>)}
            </Card>
        );
    }
}

export default ShoppingList;