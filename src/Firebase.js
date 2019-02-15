import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDrwcx938sB1P3GuMioBp7EbjAlRTPD6jQ",
    authDomain: "react-spas-ef4f1.firebaseapp.com",
    databaseURL: "https://react-spas-ef4f1.firebaseio.com",
    projectId: "react-spas-ef4f1",
    storageBucket: "react-spas-ef4f1.appspot.com",
    messagingSenderId: "89697885420"
  };

  firebase.initializeApp(config);

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();

  export default firebase;