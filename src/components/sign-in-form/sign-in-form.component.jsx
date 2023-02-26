import { useState } from 'react'
import FormInput from '../form-input/form-input.component'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils'
import { SignInContainer, ButtonsContainer } from './sign-in-form.styles'

// Create an empty object with the default form values (empty strings)
const defaultFormFields = {
  email: '',
  password: '',
}

// Form component with sign up methods
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  // Reset form fields after submit
  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = async () => {
    await signInWithGooglePopup()
  }

  // Submit methods
  const handleSubmit = async event => {
    event.preventDefault()
    // Create user auth object with the received information from the below function which in turn triggers the google method and returns
    try {
      await signInAuthUserWithEmailAndPassword(email, password)
      // Reset form fields after submit
      resetFormFields()
    } catch (error) {
      console.log(error)
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
      <span>sign in with email and password</span>
      <form onSubmit={handleSubmit}>
        {/* Use the FormInput component with props to create html input */}
        <FormInput
          label='email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />
        {/* The value is passed not by the input, but by the handleChange function */}
        <FormInput
          label='password'
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