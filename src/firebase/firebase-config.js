import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnDjOJ12sr6ob9ywwKHUfaA1V5NEcXGaU",
  authDomain: "realtime-chat-c3be2.firebaseapp.com",
  projectId: "realtime-chat-c3be2",
  storageBucket: "realtime-chat-c3be2.appspot.com",
  messagingSenderId: "442140165651",
  appId: "1:442140165651:web:f5147c3e375475a5d4e1e6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider };
