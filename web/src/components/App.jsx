import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './navbar/Navbar.jsx';
import * as ROUTES from '../constants/routes.js';
import { LandingPage, ShoppingListPage, SearchPage } from './pages';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route exact path={ROUTES.LANDING} component={LandingPage} />
                    <Route path={ROUTES.SHOPPING_LIST} component={ShoppingListPage} />
                    <Route path={ROUTES.SEARCH} component={SearchPage} />
                    <Redirect to={ROUTES.LANDING} />
                </Switch>
            </div>
        );
    }
}

export default App;