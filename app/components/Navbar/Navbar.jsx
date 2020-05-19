import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <div
                className={'navbar-default'}
                style={{ width: '100%', height: 100 }}
            >
                {"PantryPro"}
            </div>
        );
    }
}

export default Navbar;