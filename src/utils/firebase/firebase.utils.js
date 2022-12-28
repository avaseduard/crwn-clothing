import { initializeApp } from 'firebase/app'; // creates an app instance in firebase
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'; // instances we need for authorization
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'; // instances we need for database get and set data

// My web app's Firebase configuration (copied from firebase)
const firebaseConfig = {
  apiKey: 'AIzaSyDA7esDCw0f0YVEDTH2_O5uvDcgK9Tq-Og',
  authDomain: 'crwn-clothing-db-4ae53.firebaseapp.com',
  projectId: 'crwn-clothing-db-4ae53',
  storageBucket: 'crwn-clothing-db-4ae53.appspot.com',
  messagingSenderId: '664232966870',
  appId: '1:664232966870:web:5bbfbfe2b0cbc1a76aa777',
};

// Initialize firebase (copied from firebase)
const firebaseApp = initializeApp(firebaseConfig);

// Setting up the firebase to our specific situation
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// Setting up the database for our app
export const db = getFirestore(); // our actual database

// Creating an user entrance in the database (additional information is the displayName object)
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  // Get data from db, under collection users and the id from the userAuth
  const userDocRef = doc(db, 'users', userAuth.uid);

  //Get the napshot of the db entrance
  const userSnapshot = await getDoc(userDocRef);

  // If the user data doesn't exist, create it
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth; // get the name and email from the user authentication
    const createdAt = new Date();

    // This is how we set that data to firebase, in an object; the additional information is the displayName (in a destructured object)
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userDocRef;
};

//
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

//
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

// Firebase method which signs out the user; it knows which user by passing it the auth
export const signOutUser = async () => await signOut(auth)

// Return what we get back from onAuthStateChanged which takes two parameters: the auth and a callback that we want to call every time the auth state changes, meaning when the user logs in or out
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)