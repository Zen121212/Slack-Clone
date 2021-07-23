import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCiEjfGpmASt5GA6D_mt6I_h7tXyF9VWXI",
    authDomain: "slack-clone-fe54c.firebaseapp.com",
    projectId: "slack-clone-fe54c",
    storageBucket: "slack-clone-fe54c.appspot.com",
    messagingSenderId: "260822519077",
    appId: "1:260822519077:web:a009aa195a687160111ecc"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider, db };