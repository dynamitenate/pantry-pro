import React from 'react';
import ReactDOM from 'react-dom';
//import * as Firebase from 'firebase';
import Firebase from 'firebase/app';
import App from './components/App.jsx';
import './index.css';
const firebaseConfig = require('../firebaseConfig.json')

// Connect to Firebase;
Firebase.initializeApp(firebaseConfig);

// Render root React component
ReactDOM.render(
    <App />,
    document.getElementById('app')
);
