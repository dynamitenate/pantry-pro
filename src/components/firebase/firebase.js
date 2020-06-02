import React from 'react';
import app from 'firebase/app';
import 'firebase/database';

const appSettings = require('../../../appSettings.json');

class Firebase {
    constructor() {
        app.initializeApp(appSettings.firebaseConfig);
    }
}

const FirebaseContext = React.createContext(null);

export { FirebaseContext };
export default Firebase;