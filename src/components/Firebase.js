import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCcMbC7ROD5JmOodrTaQvmDlH62Ak62ksg",
    authDomain: "url-shortner-dc4b5.firebaseapp.com",
    projectId: "url-shortner-dc4b5",
    storageBucket: "url-shortner-dc4b5.appspot.com",
    messagingSenderId: "164341254870",
    appId: "1:164341254870:web:030fc725fae305072b9777",
    measurementId: "G-RGB5S0Q4BF"
  };

const app= firebase.initializeApp(firebaseConfig);
const db= app.firestore();

export default db;