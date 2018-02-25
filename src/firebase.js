import * as firebase from 'firebase'; 


// Initialize Firebase
const config = {
    apiKey: "AIzaSyDYQnb5errCeTuEUCewe4JNgEIz6fmn7Ls",
    authDomain: "forms-test-f0fa0.firebaseapp.com",
    databaseURL: "https://forms-test-f0fa0.firebaseio.com",
    projectId: "forms-test-f0fa0",
    storageBucket: "forms-test-f0fa0.appspot.com",
    messagingSenderId: "307937867788"
};

firebase.initializeApp(config);

firebase.database().ref()
.set('It works! Alive and chicken!');
