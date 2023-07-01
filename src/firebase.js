import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB2dHCR9F5IxxYYtjTHwylkTEu0MJgq1vI",
  authDomain: "js-react-firebase-wheres-waldo.firebaseapp.com",
  projectId: "js-react-firebase-wheres-waldo",
  storageBucket: "js-react-firebase-wheres-waldo.appspot.com",
  messagingSenderId: "1062792309940",
  appId: "1:1062792309940:web:fe9a2017d6bd1282a7fbe1",
  measurementId: "G-HN47DKDJKP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const addScore = async (username, score,) => {
  try {
    const scoresCollection = collection(db, 'scores');
    const docRef = await addDoc(scoresCollection, {
      username,
      score,
      timestamp: new Date()
    });
    console.log("Score added with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding score: ", e);
  }
};

export { db, addScore };