import * as firebase from 'firebase';
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBLAl5kilkWVPpSgpWpBI0OvohyAI3l97A",
    authDomain: "diary-9ad12.firebaseapp.com",
    databaseURL: "https://diary-9ad12.firebaseio.com",
    projectId: "diary-9ad12",
    storageBucket: "",
    messagingSenderId: "360896634287"
  };
  firebase.initializeApp(config);

  export const database = firebase.database().ref('/notes');

  export const auth = firebase.auth();
  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  export const twitterProvider = new firebase.auth.TwitterAuthProvider();
