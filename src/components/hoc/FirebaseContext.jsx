import React from 'react';
import app from 'firebase/app';
import 'firebase/database';

const appSettings = require('../../../appSettings.json');

class Firebase {
    constructor() {
        app.initializeApp(appSettings.firebaseConfig);

        this.db = app.database();
    }
}

const FirebaseContext = React.createContext(null);

// HOC to get entire firebase context
export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
        {
            firebase => <Component {...props} firebase={firebase} />
        }
    </FirebaseContext.Consumer>
);

// HOC to get just database from firebase context
export const withDatabase = Component => props => (
    <FirebaseContext.Consumer>
        {
            firebase => <Component {...props} db={firebase.db} />
        }
    </FirebaseContext.Consumer>
);

export { FirebaseContext }
export default Firebase;