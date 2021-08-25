import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB38r5PTpMzX1lT7ia74cr8iSJ1oF5onrM",
    authDomain: "note-project-272fe.firebaseapp.com",
    projectId: "note-project-272fe",
    storageBucket: "note-project-272fe.appspot.com",
    messagingSenderId: "574689139198",
    appId: "1:574689139198:web:62cb06ee6638dcd47588af"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
// export const provider = new firebase.auth.GoogleAuthProvider();
export default firebase;