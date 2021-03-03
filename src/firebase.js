// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDIjCQXpg2uXrqLsmrF1wO0KI1ooDXFGLU",
    authDomain: "clone-6dffd.firebaseapp.com",
    databaseURL: "https://clone-6dffd.firebaseio.com",
    projectId: "clone-6dffd",
    storageBucket: "clone-6dffd.appspot.com",
    messagingSenderId: "858370676226",
    appId: "1:858370676226:web:c25c9629a56b58dcf3f91b",
    measurementId: "G-RLQ6ZFC6QH"
};

const fireBaseApp = firebase.initializeApp(firebaseConfig);

const db = fireBaseApp.firestore();
const auth = firebase.auth();
export { db, auth };