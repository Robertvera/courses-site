import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyAI5LPmuB1jXqOShVA0FBKdPFn6vOxnWSY",
    authDomain: "vmbformacion-3c649.firebaseapp.com",
    databaseURL: "https://vmbformacion-3c649.firebaseio.com",
    projectId: "vmbformacion-3c649",
    storageBucket: "vmbformacion-3c649.appspot.com",
    messagingSenderId: "1017284527747"
})


ReactDOM.render(<App />, document.getElementById('root'));