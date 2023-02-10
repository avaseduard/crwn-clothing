import { initializeApp } from 'firebase/app' // creates an app instance in firebase based on a config
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth' // instances we need for authorization
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore' // instances we need for database get and set data

// My web app's firebase configuration (copied from firebase when the app is created)
const firebaseConfig = {
  apiKey: 'AIzaSyAfrJjsGV2GOXMHqg82vTO8yeMMx9gjBn8',
  authDomain: 'udrone-shop-db.firebaseapp.com',
  projectId: 'udrone-shop-db',
  storageBucket: 'udrone-shop-db.appspot.com',
  messagingSenderId: '805119239816',
  appId: '1:805119239816:web:b94efdc4f09a134f7fa13d',
}

// Initialize firebase (copied from firebase)
const firebaseApp = initializeApp(firebaseConfig)

// Get a provider instance based on the googleauthprovider class
const googleProvider = new GoogleAuthProvider()

// Configure the provider with rules; we just want to select the account when someone interacts with the provider
googleProvider.setCustomParameters({
  prompt: 'select_account',
})

// Create an auth with getauth method
export const auth = getAuth()

// Pass the auth and provider to the signinwithpopup
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

// Instantiate our actual database
export const db = getFirestore()

// Creating an user entrance in the database (additional information is the displayName object)
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  // If the userAuth doesn't exist, return
  if (!userAuth) return
  // Get data from db, under collection users and the user id from the userAuth
  const userDocRef = doc(db, 'users', userAuth.uid)
  // Get the snapshot (data) of the user's db entrance
  const userSnapshot = await getDoc(userDocRef)
  // If the user data doesn't exist, create it
  if (!userSnapshot.exists()) {
    // Get the name and email from the user auth
    const { displayName, email } = userAuth
    // Get the date so we know when the user was created
    const createdAt = new Date()
    // Set that data to firebase, in an object; the additional information is the displayName (in a destructured object)
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  // If the user exists, just return the userSnapshot
  return userSnapshot
}

// Create user with email & password using the firebase auth native provider
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  // Exit the function if we do not have an email or password
  if (!email || !password) return
  return await createUserWithEmailAndPassword(auth, email, password)
}

//Sign in already existing user with email and password
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return
  return await signInWithEmailAndPassword(auth, email, password)
}

// Firebase method which signs out the user; it knows which user by passing it the auth
export const signOutUser = async () => await signOut(auth)

// Return what we get back from onAuthStateChanged which takes two parameters: the auth and a callback that we want to call every time the auth state changes, meaning when the user logs in or out
export const onAuthStateChangedListener = callback =>
  onAuthStateChanged(auth, callback)

// Check if our auth state has changed, i.e. if there is an auth that still exists
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    // User auth gives us the user value and once we have that we close the listener (unsubscribe) and then we resolve with the userAuth
    const unsubscribe = onAuthStateChanged(
      auth,
      userAuth => {
        unsubscribe()
        resolve(userAuth)
      },
      // Reject promise in case it fails to get the user
      reject
    )
  })
}

// Create a new collection in firebase for our store categories and items
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  // Create collection reference inside our database (same as the one we use for users)
  const collectionRef = collection(db, collectionKey)
  // Create a batch in the database using the method provided by firebase
  const batch = writeBatch(db)
  // Loop through our array of objects and make a docref for each title (hats, sneakers, etc.)
  objectsToAdd.forEach(object => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    // Set the value of that collection to the object (meaning the items)
    batch.set(docRef, object)
  })
  await batch.commit()
  console.log('done')
}

// Pull the items for website from firestore database
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories')

  const q = query(collectionRef)

  const querySnapshot = await getDocs(q)
  // Return the categories map as an array
  return querySnapshot.docs.map(docSnapshot => docSnapshot.data())
}
