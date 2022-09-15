import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//new method for importing firebase
// import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAmmtFMNuOux99A4Y7sEhfLEchVz7ZdZi0",
    authDomain: "facebook-clone-e4045.firebaseapp.com",
    projectId: "facebook-clone-e4045",
    storageBucket: "facebook-clone-e4045.appspot.com",
    messagingSenderId: "790569477498",
    appId: "1:790569477498:web:0dbdac37afc221f13a22c3",
    measurementId: "G-3JJKMB67HN"
  }; 

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;