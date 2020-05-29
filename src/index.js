import React from 'react';
import ReactDOM from 'react-dom';
import Firebase from 'firebase/app';
import App from './components/App.jsx';
import './index.css';

// Connect to Firebase;
const appSettings = require('../appSettings.json')
Firebase.initializeApp(appSettings.firebaseConfig);

// Render root React component
ReactDOM.render(
    <App />,
    document.getElementById('app')
);
