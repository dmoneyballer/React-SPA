import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

// firebase api goes here
firebase.initializeApp(config);
  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();

export default firebase;