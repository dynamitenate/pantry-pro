import React from 'react';
import Navbar from './navbar/Navbar.jsx';
import ShoppingList from './shopping-list/ShoppingList.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div
                    style={{
                        paddingTop: 50,
                        textAlign: 'center'
                    }}
                >
                    <ShoppingList
                        style={{
                            width: 500,
                            height: 500
                        }}  
                    />
                </div>
            </div>
        )
    }
}

export default App;