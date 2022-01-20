import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyARjcmuLL8zsp7MfGAcfbzO-tuzWC7fDCU",
  authDomain: "twitter-clone-ec69f.firebaseapp.com",
  projectId: "twitter-clone-ec69f",
  storageBucket: "twitter-clone-ec69f.appspot.com",
  messagingSenderId: "592834313433",
  appId: "1:592834313433:web:edaf00e9cbd9028ca3d2c8",
  measurementId: "G-GHVY9W1F3G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
