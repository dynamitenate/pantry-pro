import React from 'react';
import Card from './common/Card.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <Card
                    style={{ fontSize: 20 }}
                >
                    Hello World!!!
                </Card>
            </div>
        )
    }
}

export default (App);