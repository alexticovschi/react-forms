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

const firebaseDB = firebase.database();

firebaseDB.ref().set({
    firstname: "Stephen",
    lastname: "Curry",
    age: 29,
    height: "1.91m",
    number: 30,
    position: "Point guard",
    spouse: "Ayesha Curry",
    team: {
        founded: 1946,
        name: "Golden State Warriors",
        nickname: "Dubs"
    },
    parents: ["Sonya", "Dell"]

});
