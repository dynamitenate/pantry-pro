import React from 'react';
import Button from '../common/Button.jsx';
import { withDatabase } from '../../hoc/FirebaseContext.jsx';

class SearchItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
    }

    handleAddButtonClick() {
        let table = this.props.db.ref().child("test-global-list");
        table.once("value").then(snap => {
            let items = snap.val().items;
            items.push(this.props.value);
            table.set({ items });
        });
    }

    render() {
        return (
            <div
                className={'shopping-list-item'}
            >
                <Button
                    className={'shopping-list-add-button'}
                    style={{
                        width: 30,
                        height: 30
                    }}
                    onClick={this.handleAddButtonClick}
                >
                </Button>
                {this.props.value}
            </div>
        );
    }
}

export default withDatabase(SearchItem);
