import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD6xmKprqDyidB9hNpHhxl85pX85zVvemI",
  authDomain: "netflix-react-challenge.firebaseapp.com",
  projectId: "netflix-react-challenge",
  storageBucket: "netflix-react-challenge.appspot.com",
  messagingSenderId: "412770581475",
  appId: "1:412770581475:web:c963b0b6148eedf677bed6"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };


