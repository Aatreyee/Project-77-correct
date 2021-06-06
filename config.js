import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyBnWW2UQ3tmddZoor1ZMI2OH_IMqGtON3w",
  authDomain: "barter-application-15379.firebaseapp.com",
  projectId: "barter-application-15379",
  storageBucket: "barter-application-15379.appspot.com",
  messagingSenderId: "1017769975544",
  appId: "1:1017769975544:web:f31f0ec09bb758614c250d"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.firestore();