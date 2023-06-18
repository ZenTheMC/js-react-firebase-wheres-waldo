import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB2dHCR9F5IxxYYtjTHwylkTEu0MJgq1vI",
  authDomain: "js-react-firebase-wheres-waldo.firebaseapp.com",
  projectId: "js-react-firebase-wheres-waldo",
  storageBucket: "js-react-firebase-wheres-waldo.appspot.com",
  messagingSenderId: "1062792309940",
  appId: "1:1062792309940:web:fe9a2017d6bd1282a7fbe1",
  measurementId: "G-HN47DKDJKP"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();