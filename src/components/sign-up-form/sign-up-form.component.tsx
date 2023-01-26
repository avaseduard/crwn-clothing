import { useState, FormEvent, ChangeEvent } from 'react'
import { AuthError, AuthErrorCodes } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'
import { signUpStart } from '../../store/user/user.action'
import { SignUpContainer } from './sign-up-form.styles'

// Create an empty object with the default form values (empty strings)
const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

// Form component with sign up methods
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields
  const dispatch = useDispatch()

  // // useContext gets us the value of UserContext which returns the currentUser and the setCurrentUser, but in the sign-in component we only need the setter function
  // const { setCurrentUser } = useContext(UserContext);

  // Reset form fields after submit
  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  // Submit methods
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Check if passwords match, alert and return if not
    if (password !== confirmPassword) {
      alert('Please match your passwords')
      return
    }
    // Create user auth object with the received information from the below function which in turn triggers the google method and returns
    try {
      // const { user } = await createAuthUserWithEmailAndPassword(email, password)
      // // Run setCurrentUser from above (that's actually from the UserContext) whenever the user value comes back
      // setCurrentUser(user);
      // // Below function called from firebase.utils which sends the userAuth and the displayName
      // await createUserDocumentFromAuth(user, { displayName })
      dispatch(signUpStart(email, password, displayName))
      // Reset form fields after submit
      resetFormFields()
    } catch (error) {
      // Alert if e-mail already exists
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert('Cannot create new account - email address already in use')
      } else {
        // Alert if anything else failed
        console.error('User creation failed:', error)
      }
    }
  }

  // Get the typed information from form fields
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    // When the user types something in the input field, we get the value and the key (name) from the event.target
    const { name, value } = event.target

    // Set the formfields object by spreading it and then dinamically changing the [key], which in turn becomes displayname, email, etc. and give it the value from the input (by event.targer)
    setFormFields({ ...formFields, [name]: value })
  }

  // Sign-up form
  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        {/* Use the FormInput component with props to crate html input */}
        <FormInput
          label='Display name'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />
        {/* The value is passed not by the input, but by the andlechange function */}

        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        <FormInput
          label='Confirm pasword'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />

        <Button type='submit'>sign up</Button>
      </form>
    </SignUpContainer>
  )
}

export default SignUpForm
