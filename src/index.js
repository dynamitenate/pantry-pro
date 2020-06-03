import React from 'react';
import ReactDOM from 'react-dom';
import Firebase, { FirebaseContext } from './components/hoc/FirebaseContext.jsx';
import App from './components/App.jsx';
import './index.css';

// Render root React component
ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <App />
    </FirebaseContext.Provider>,
    document.getElementById('app')
);
