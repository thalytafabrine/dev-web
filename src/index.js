import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

ReactDOM.render(<App />, document.getElementById('root'));

const firebaseConfig = {
    apiKey: "AIzaSyA1ySjhxzV2nAuXxPbN5WCsnqukNrCcIJg",
    authDomain: "memorize-7e912.firebaseapp.com",
    databaseURL: "https://memorize-7e912.firebaseio.com",
    projectId: "memorize-7e912",
    storageBucket: "memorize-7e912.appspot.com",
    messagingSenderId: "940690867000"
};

firebase.initializeApp(firebaseConfig);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
