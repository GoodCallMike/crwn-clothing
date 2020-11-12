import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD2UorQ4J2xLsz1U73MfWGYQ8QZI6YxrlI",
  authDomain: "crwn-clothing-c8009.firebaseapp.com",
  databaseURL: "https://crwn-clothing-c8009.firebaseio.com",
  projectId: "crwn-clothing-c8009",
  storageBucket: "crwn-clothing-c8009.appspot.com",
  messagingSenderId: "889143545959",
  appId: "1:889143545959:web:340f2a8f14d4e1fce784c2",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
