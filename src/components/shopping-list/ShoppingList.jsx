import React from 'react';
import Card from '../common/Card.jsx';
import ShoppingListItem from './ShoppingListItem.jsx';
import Button from '../common/Button.jsx';
import Input from '../common/Input.jsx';
import { withFirebase } from '../hoc/FirebaseContext.jsx';

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
        this.props.firebase.db.ref().child("test-global-list")
            .once("value").then(snap => this.setState({ items: snap.val().items }));
    }

    handleAddButtonClick() {
        this.setState(state => {
            let items = [...state.items, state.input];
            return { input: '' , items };
        }, () => {
            const items = this.state.items;
            this.props.firebase.db.ref().child("test-global-list")
            .set({ items });
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
                {this.state.items.map((item, index) => <ShoppingListItem key={index} value={item}/>)}
            </Card>
        );
    }
}

export default withFirebase(ShoppingList);