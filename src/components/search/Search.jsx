import React from 'react';
import Card from '../common/Card.jsx';
import SearchItem from './SearchItem.jsx';
import Button from '../common/Button.jsx';
import Input from '../common/Input.jsx';

class ShoppingList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: '',
            items: []
        }
        this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        console.log('mounted');
    }

    handleSearchButtonClick() {
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
                        onClick={this.handleSearchButtonClick}
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
                {this.state.items.map(item => <SearchItem value={item}/>)}
            </Card>
        );
    }
}

export default ShoppingList;
