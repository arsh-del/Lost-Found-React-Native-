import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyB7AmZpK2TJt3fakMfMHLQh6rcnBf4SU1U",
    authDomain: "lostandfound-8c3ad.firebaseapp.com",
    projectId: "lostandfound-8c3ad",
    storageBucket: "lostandfound-8c3ad.appspot.com",
    messagingSenderId: "325997800553",
    appId: "1:325997800553:web:20c6e23689069f16e306f8"
  };

  let app;


  if(firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
  }
  else{
      app=firebase.app();
  }

  const db =app.firestore();
  const auth = firebase.auth();

  export {db,auth};
  