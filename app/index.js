import React from 'react';
import ReactDOM from 'react-dom';
//import * as Firebase from 'firebase';
import Firebase from 'firebase/app';
import App from './components/App.jsx';
import './index.css';

// Connect to Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAkc1-_zeHsICFv6CaaxbjIVQNaCzvD1hg",
    authDomain: "pantry-pro.firebaseapp.com",
    databaseURL: "https://pantry-pro.firebaseio.com",
    projectId: "pantry-pro",
    storageBucket: "pantry-pro.appspot.com",
    messagingSenderId: "305086027682",
    appId: "1:305086027682:web:8651df290dc2f9233844fb"
};
Firebase.initializeApp(firebaseConfig);

// Render root React component
ReactDOM.render(
    <App />,
    document.getElementById('app')
);