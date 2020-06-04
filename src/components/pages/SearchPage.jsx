import React from 'react';
import Search from '../search/Search.jsx';

class SearchPage extends React.Component {
    render() {
        return (
            <div
                style={{
                    paddingTop: 50,
                    textAlign: 'center'
                }}
            >
                <Search
                    style={{
                        width: 500,
                        height: 500
                    }}  
                />
            </div>
        );
    }
}

export default SearchPage;