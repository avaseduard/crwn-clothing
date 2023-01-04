import { createContext, useState, useEffect } from 'react'; // allows the use of context storage

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';

// Build the context and export it through this function, to anywhere we need it; this is the actual value of the context
export const UserContext = createContext({
  // Set the default value of currentuser and setcurrentuser to null object and null function, since we don't have an user in the beginning; they are being set to null in the UserProvider, but the usercontext also needs to have them
  currentUser: null,
  setCurrentUser: () => null,
});

// The provider is the actual component that receives children
export const UserProvider = ({ children }) => {
  // Use the usestate hook to pass the initial value of currentUser as null
  const [currentUser, setCurrentUser] = useState(null);
  // Value is an object that passes the {value} for both the currentUser and the setCurrentUser
  const value = { currentUser, setCurrentUser }; // the value is what data we pass to another component that uses the usercontext and it passes both the currentuser as well as the setter value
  // Now, the provider allows for any {children} component to use the values inside the useState; this way, in any component we can set the user value and read the user value

  // Runs only when the component mounts
  useEffect(() => {
    // Returns a function that stops listening
    const unsubscribe = onAuthStateChangedListener(user => {
      // Set the user to null or an object, depending on what we receive from the auth (sign in or out)
      // Call the function that creates an user entrance in the firestore database
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    // Makes it run whenever it unmounts
    return unsubscribe;
  }, []);

  // The provider wraps up the components (children) that need the usercontext data
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
