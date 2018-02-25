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


// Using promises to post data
// Update data example 2
firebaseDB.ref().update({
        'parents/0': 'Sonya Curry',
        'parents/1': 'Dell Curry',
        'team/head coach' : 'Steve Kerr'
    })
    .then(() => {
        console.log('data updated')
    })
    .catch((e) => {
        console.log(e);
    });



// // Updating data example 1
// firebaseDB.ref().update({
//         friends: [
//             'Kevin Durant',
//             'Kris Wu'
//         ]
//     })
//     .then(() => {
//         console.log('data updated')
//     })
//     .catch((e) => {
//         console.log(e);
//     });

// Removing/deleting data
// firebaseDB.ref('team/joker').remove()
//     .then(() => {
//         console.log('data removed')
//     })
//     .catch((e) => {
//         console.log(e);
//     });


// firebaseDB.ref().set({
//     firstname: "Stephen",
//     lastname: "Curry",
//     age: 29,
//     height: "1.91m",
//     number: 30,
//     position: "Point guard",
//     spouse: "Ayesha Curry",
//     team: {
//         founded: 1946,
//         name: "Golden State Warriors",
//         nickname: "Dubs"
//     },
//     parents: ["Sonya", "Dell"]

// });
