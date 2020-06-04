import React from 'react';
import NavbarLinks from './NavbarLinks.jsx';
import * as ROUTES from '../../constants/routes.js';

class Navbar extends React.Component {
    render() {
        return (
            <div
                className={'navbar'}
                style={{
                    width: '100%',
                    height: 100,
                    lineHeight: '100px'
                }}
            >
                <div
                    className={'navbar-title'}
                >
                    {"PantryPro"}
                </div>
                <NavbarLinks
                    links={[
                        { route: ROUTES.LANDING, label: "Landing" },
                        { route: ROUTES.SHOPPING_LIST, label: "Shopping List" },
                        { route: ROUTES.SEARCH, label: "Search" }
                    ]}
                />
            </div>
        );
    }
}

export default Navbar;