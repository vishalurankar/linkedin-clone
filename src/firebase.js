import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDpPCefphJfm8CXyKGceELWgsjyBedDGQI",
  authDomain: "linkedin-clone-9f6de.firebaseapp.com",
  projectId: "linkedin-clone-9f6de",
  storageBucket: "linkedin-clone-9f6de.appspot.com",
  messagingSenderId: "990915831325",
  appId: "1:990915831325:web:dea70edb85d7282872c8f4",
  measurementId: "G-X2G583VSQB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
