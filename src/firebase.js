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

// Always listen for database changes
// Listen for added child
firebaseDB.ref().on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
});



// // Listen for changes
// firebaseDB.ref().on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });


// // Listen for removed elements  
// firebaseDB.ref().on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });



// // 1. Go to the database and get the (updated) data
// firebaseDB.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// });

// // 2. Update the firstname. Change the name from 'Stephen' to 'Stevo'
// setTimeout(() => {
//     firebaseDB.ref().update({
//         'firstname': 'Stevo'
//     })
//     console.log('Update complete!')
// }, 3000)

// // 3. Turn off the on listener/Don't listen for changes anymore
// setTimeout(() => {
//     firebaseDB.ref().off();
//     console.log("Don't listen for changes anymore")
// }, 6000)

// // 4. Update the firstname again
// setTimeout(() => {
//     firebaseDB.ref('firstname').set('Stephen')
//     console.log("Update complete! No data received")
// }, 9000)




// // Get data only once
// firebaseDB.ref().once('value')
//     .then((snapshot) => {
//         console.log(snapshot.val())
//     })
//     .catch((e) => {
//         console.log(e);
//     });
