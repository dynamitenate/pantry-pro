import React from 'react';
import Card from '../common/Card.jsx';
import Input from '../common/Input.jsx';

class LandingPage extends React.Component {
    render() {
        return (
            <div
                style={{
                    paddingTop: 50,
                    textAlign: 'center'
                }}
            >
                {"Landing Page..."}
                <br />
                <Card
                    style={{ marginTop: 50, padding: 20, height: 100, width: 250 }}
                >
                    <Input
                        autocomplete={[
                            'test'
                        ]}
                    />
                </Card>
            </div>
        );
    }
}

export default LandingPage;