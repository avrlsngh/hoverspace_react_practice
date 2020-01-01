import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

// Initialize firebase
var firebaseConfig = {
    apiKey: "AIzaSyDrRufVvQaXj6LuhW9wGA5TqxO7JjfzGTc",
    authDomain: "hoverspace-react.firebaseapp.com",
    databaseURL: "https://hoverspace-react.firebaseio.com",
    projectId: "hoverspace-react",
    storageBucket: "hoverspace-react.appspot.com",
    messagingSenderId: "189679693471",
    appId: "1:189679693471:web:da0097fda3c11c0dcabcaa",
    measurementId: "G-38148JVLS1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({  });

  export default firebase;