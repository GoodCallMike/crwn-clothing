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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
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
