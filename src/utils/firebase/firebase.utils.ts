import { initializeApp } from 'firebase/app' // creates an app instance in firebase
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver,
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
  QuerySnapshot,
  QueryDocumentSnapshot,
} from 'firebase/firestore' // instances we need for database get and set data
import { Category } from '../../store/categories/category.types'

// My web app's Firebase configuration (copied from firebase)
const firebaseConfig = {
  apiKey: 'AIzaSyDA7esDCw0f0YVEDTH2_O5uvDcgK9Tq-Og',
  authDomain: 'crwn-clothing-db-4ae53.firebaseapp.com',
  projectId: 'crwn-clothing-db-4ae53',
  storageBucket: 'crwn-clothing-db-4ae53.appspot.com',
  messagingSenderId: '664232966870',
  appId: '1:664232966870:web:5bbfbfe2b0cbc1a76aa777',
}

// Initialize firebase (copied from firebase)
const firebaseApp = initializeApp(firebaseConfig)

// Setting up the firebase to our specific situation
const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

// Setting up the database for our app
export const db = getFirestore() // our actual database

export type AdditionalInformation = {
  displayName?: string
}

export type UserData = {
  createdAt: Date
  displayName: string
  email: string
}

// Creating an user entrance in the database (additional information is the displayName object)
export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation = {} as AdditionalInformation
): Promise<void | QueryDocumentSnapshot<UserData>> => {
  // If the userAuth doesn't exist, return
  if (!userAuth) return

  // Get data from db, under collection users and the id from the userAuth
  const userDocRef = doc(db, 'users', userAuth.uid)

  // Get the snapshot of the db entrance
  const userSnapshot = await getDoc(userDocRef)

  // If the user data doesn't exist, create it
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth // get the name and email from the user authentication
    const createdAt = new Date()

    // This is how we set that data to firebase, in an object; the additional information is the displayName (in a destructured object)
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      })
    } catch (error) {
      console.log('error creating user', error)
    }
  }
  return userSnapshot as QueryDocumentSnapshot<UserData>
}

//
export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return
  return await createUserWithEmailAndPassword(auth, email, password)
}

//
export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return
  return await signInWithEmailAndPassword(auth, email, password)
}

// Firebase method which signs out the user; it knows which user by passing it the auth
export const signOutUser = async () => await signOut(auth)

// Return what we get back from onAuthStateChanged which takes two parameters: the auth and a callback that we want to call every time the auth state changes, meaning when the user logs in or out
export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback)

// Check if our auth state has changed, i.e. if there is an auth that still exists
export const getCurrentUser = (): Promise<User | null> => {
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

export type ObjectToAdd = {
  title: string
}

// Create a new collection in firebase for our store categories and items
export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
  collectionKey: string,
  objectsToAdd: T[]
): Promise<void> => {
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
export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
  const collectionRef = collection(db, 'categories')

  const q = query(collectionRef)

  const querySnapshot = await getDocs(q)
  // Return the categories map as an array
  return querySnapshot.docs.map(docSnapshot => docSnapshot.data() as Category)
}
