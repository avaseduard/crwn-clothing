import { InputHTMLAttributes, FC } from 'react'
import { FormInputLabel, Input, Group } from './form-input.styles'

type FormInputPros = { label: string } & InputHTMLAttributes<HTMLInputElement>

// Create the input html element using the props received from sign-up-form component
const FormInput: FC<FormInputPros> = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {/* If there's no label prop, don't render a label; when the user inputs a value, apply the shrink class */}
      {label && (
        <FormInputLabel
          shrink={Boolean(
            otherProps.value &&
              typeof otherProps.value === 'string' &&
              otherProps.value.length
          )}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  )
}

export default FormInput
