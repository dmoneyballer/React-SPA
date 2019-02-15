import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCjC8FIAa2a_LMfXAkT3USUc0QKX_kBgXE",
  authDomain: "react-spa-e8024.firebaseapp.com",
  databaseURL: "https://react-spa-e8024.firebaseio.com",
  projectId: "react-spa-e8024",
  storageBucket: "react-spa-e8024.appspot.com",
  messagingSenderId: "1045381734626"
};
firebase.initializeApp(config);

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();

  export default firebase;