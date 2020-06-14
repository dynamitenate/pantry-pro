import React from 'react';
import Card from '../common/Card.jsx';
import SearchItem from './SearchItem.jsx';
import Button from '../common/Button.jsx';
import Input from '../common/Input.jsx';
import './Search.css';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: '',
            items: []
        }
        this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSearchButtonClick() {
        let search_url = window.location.origin + '/spoonacular/food/search?query=' + this.state.input;
        fetch(search_url)
            .then(res => res.json())
            .then(json => {
                this.setState({ items: json.products.map(product => product.title) });
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleInputChange(input) {
        this.setState({ input });
    }

    render() {
        return (
            <Card
                className={'search'}
                style={this.props.style}
            >
                <div
                    style={{ display: 'flex' }}
                >
                    <Button
                        className={'search-add-button'}
                        style={{
                            width: 50,
                            height: 50
                        }}
                        onClick={this.handleSearchButtonClick}
                    >
                    </Button>
                    <Input
                        className={'search-input'}
                        style={{
                            height: 45,
                            width: 420
                        }}
                        value={this.state.input}
                        onChange={event => this.handleInputChange(event.target.value)}
                        placeholder={'Search for item...'}
                    />
                </div>
                {this.state.items.map(item => <SearchItem value={item}/>)}
            </Card>
        );
    }
}

export default Search;
