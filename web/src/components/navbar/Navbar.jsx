import React from 'react';
import NavbarLinks from './NavbarLinks.jsx';
import * as ROUTES from '../../constants/routes.js';
import './Navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <div
                className={'navbar'}
                style={{ width: '100%' }}
            >
                <div
                    className={'navbar-title'}
                    style={{ paddingTop: 10 }}
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