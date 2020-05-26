import React from 'react';
import ReactDOM from 'react-dom';
//import * as Firebase from 'firebase';
import Firebase from 'firebase/app';
import App from './components/App.jsx';
import './index.css';
import firebaseConfig from '../firebaseConfig.js'

// Connect to Firebase;
Firebase.initializeApp(firebaseConfig);

// Render root React component
ReactDOM.render(
    <App />,
    document.getElementById('app')
);
