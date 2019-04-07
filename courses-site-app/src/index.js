import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import * as firebase from 'firebase/app';
import 'firebase/auth'
import tokenHelper from './js/tokenHelper'

firebase.initializeApp({
    apiKey: "AIzaSyAI5LPmuB1jXqOShVA0FBKdPFn6vOxnWSY",
    authDomain: "vmbformacion-3c649.firebaseapp.com",
    databaseURL: "https://vmbformacion-3c649.firebaseio.com",
    projectId: "vmbformacion-3c649",
    storageBucket: "vmbformacion-3c649.appspot.com",
    messagingSenderId: "1017284527747"
})

Object.defineProperties(tokenHelper, {
    __userApiToken__: {
        set(token) {
            sessionStorage.setItem('__userApiToken__', token)
        },

        get() {
            return sessionStorage.getItem('__userApiToken__')
        }
    }
})


ReactDOM.render(<App />, document.getElementById('root'));