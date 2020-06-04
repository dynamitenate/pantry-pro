import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './navbar/Navbar.jsx';
import * as ROUTES from '../constants/routes.js';
import { LandingPage, ShoppingListPage, SearchPage } from './pages';

class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Navbar />
                        <Route exact path={ROUTES.LANDING} component={LandingPage} />
                        <Route exact path={ROUTES.SHOPPING_LIST} component={ShoppingListPage} />
                        <Route exact path={ROUTES.SEARCH} component={SearchPage} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;