import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyD0_ttW8IjVPCm1IxDDb-lI7jZDF8dyCDk",
  authDomain: "todolist-app-47493.firebaseapp.com",
  projectId: "todolist-app-47493",
  storageBucket: "todolist-app-47493.appspot.com",
  messagingSenderId: "808730909690",
  appId: "1:808730909690:web:981f4006f2f0dab9af2243",
  measurementId: "G-4JF4L9S562",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
