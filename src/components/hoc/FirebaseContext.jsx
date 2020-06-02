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

export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
        {
            firebase => <Component {...props} firebase={firebase} />
        }
    </FirebaseContext.Consumer>
);
export { FirebaseContext }
export default Firebase;