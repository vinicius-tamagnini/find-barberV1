import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyA8QY47vZMeQ_glteyOq2w35NvWPvReit0",
    authDomain: "loginteste-cc482.firebaseapp.com",
    databaseURL: "https://loginteste-cc482.firebaseio.com",
    projectId: "loginteste-cc482",
    storageBucket: "loginteste-cc482.appspot.com",
    messagingSenderId: "806506543134",
    appId: "1:806506543134:web:b38bab2e57df8380ffd60f",
    measurementId: "G-2634GDTD2F"
  };
  // Initialize Firebase
  if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }
  export default firebase;