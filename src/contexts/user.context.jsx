import { createContext, useState, useEffect, useReducer } from 'react' // allows the use of context storage

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils'

// Build the context and export it through this function, to anywhere we need it; this is the actual value of the context
export const UserContext = createContext({
  // Set the default value of currentuser and setcurrentuser to null object and null function, since we don't have an user in the beginning; they are being set to null in the UserProvider, but the usercontext also needs to have them
  currentUser: null,
  setCurrentUser: () => null,
})

// Keeping track of the types of user actions
export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
}

// Instead of using useState to set the currentUser, we use reducers' every time the userReducer runs, it's because dispatch() has been called somewhere
const userReducer = (state, action) => {
  console.log('dispatch')
  console.log(action)
  const { type, payload } = action

  switch (type) {
    case 'SET_CURRENT_USER':
      // when the type is set_current_user, spread through the current state and update only the currentUser value to be = to payload
      return {
        ...state,
        currentUser: payload,
      }
    default:
      // if we get an unrecognized type, throw error
      throw new Error(`Unhandled type ${type} in the userReducer`)
  }
}

const INITIAL_STATE = {
  currentUser: null,
}

// The provider is the actual component that receives children
export const UserProvider = ({ children }) => {
  // the useReducer hooks takes in 2 values: the userReducer function and the initial state (which is a null user in our case becuase the user is not logged in) and it gives back two arguments: a current state (which in our case is the currentUser object) and a dispatch function
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE)
  console.log(currentUser)
  // Gets the user value and dispatches out the object with type and payload
  const setCurrentUser = user => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user })
  }

  // // Use the usestate hook to pass the initial value of currentUser as null
  // const [currentUser, setCurrentUser] = useState(null);
  // Value is an object that passes the {value} for both the currentUser and the setCurrentUser
  const value = { currentUser, setCurrentUser } // the value is what data we pass to another component that uses the usercontext and it passes both the currentuser as well as the setter value
  // Now, the provider allows for any {children} component to use the values inside the useState; this way, in any component we can set the user value and read the user value

  // Runs only when the component mounts
  useEffect(() => {
    // Returns a function that stops listening
    const unsubscribe = onAuthStateChangedListener(user => {
      // Set the user to null or an object, depending on what we receive from the auth (sign in or out)
      // Call the function that creates an user entrance in the firestore database
      if (user) {
        createUserDocumentFromAuth(user)
      }
      setCurrentUser(user)
    })
    // Makes it run whenever it unmounts
    return unsubscribe
  }, [])

  // The provider wraps up the components (children) that need the usercontext data
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
