import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCX6CoXASoXATS5qP0XTv-NpzQQ2BWpvqk",
    authDomain: "lostandfound-ce0a0.firebaseapp.com",
    databaseURL: "https://lostandfound-ce0a0-default-rtdb.firebaseio.com",
    projectId: "lostandfound-ce0a0",
    storageBucket: "lostandfound-ce0a0.appspot.com",
    messagingSenderId: "3856268723",
    appId: "1:3856268723:web:2020985d73eec247f4dfc6",
    measurementId: "G-5SHNL5GCD8"
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
  const storage = firebase.storage();

  export {db,auth,storage};
