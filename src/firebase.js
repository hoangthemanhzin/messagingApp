import firebase from "firebase/app";
import "firebase/auth";
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
// For Firebase JS SDK v7.20.0 and later, measurementId is option
export const auth  = firebase.initializeApp ({
    apiKey: "AIzaSyC0QsV8p3VqWgG5ZxWTaP5Pfhgu0mp9TNk",
    authDomain: "econnectapp-796ee.firebaseapp.com",
    projectId: "econnectapp-796ee",
    storageBucket: "econnectapp-796ee.appspot.com",
    messagingSenderId: "125015251257",
    appId: "1:125015251257:web:3fc50fb3ac505cd28bf0e8",
    measurementId: "G-LH1Q0P4DML"
  }).auth();

