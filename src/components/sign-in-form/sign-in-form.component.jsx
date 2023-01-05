import { useState } from 'react'
// import { useContext } from 'react';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import { SignInContainer, ButtonsContainer } from './sign-in-form.styles'
// import { UserContext } from '../../contexts/user.context';

// Create an empty object with the default form values (empty strings)
const defaultFormFields = {
  email: '',
  password: '',
}

// Form component with sign up methods
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  // // useContext gets us the value of UserContext which returns the currentUser and the setCurrentUser, but in the sign-in component we only need the setter function
  // const { setCurrentUser } = useContext(UserContext);

  // Reset form fields after submit
  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = async () => {
    // Get the user data from the object returned by the firebase response
    await signInWithGooglePopup()
    // // Run setCurrentUser from above (that's actually from the UserContext) whenever the user value comes back
    // setCurrentUser(user)
  }

  // Submit methods
  const handleSubmit = async event => {
    event.preventDefault()

    // Create user auth object with the received information from the below function which in turn triggers the google method and returns
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password)
      // // Run setCurrentUser from above (that's actually from the UserContext) whenever the user value comes back
      // setCurrentUser(user);
      // Reset form fields after submit
      resetFormFields()
    } catch (error) {
      switch (error.code) {
        case 'auth/user-not-found':
          alert('no user assciated with this email')
          break
        case 'auth/wrong-password':
          alert('incorrect password for this email')
          break
        default:
          console.log(error)
      }
    }
  }

  // Get the typed information from form fields
  const handleChange = event => {
    // When the user types something in the input field, we get the value and the key (name) from the event.target
    const { name, value } = event.target

    // Set the formfields object by spreading it and then dinamically changing the [key], which in turn becomes displayname, email, etc. and give it the value from the input (by event.targer)
    setFormFields({ ...formFields, [name]: value })
  }

  // Sign-in form
  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={handleSubmit}>
        {/* Use the FormInput component with props to create html input */}
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />
        {/* The value is passed not by the input, but by the handleChange function */}

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <ButtonsContainer>
          <Button type='submit'>sign in</Button>
          <Button
            type='button'
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            google sign in
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  )
}

export default SignInForm
