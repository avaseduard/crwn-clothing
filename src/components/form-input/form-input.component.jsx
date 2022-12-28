import './form-input.styles.scss';

// Create the input html element using the props received from sign-up-form component
const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className='group'>
      <input className='form-input' {...otherProps} />
      {/* If there's no label prop, don't render a label; when the user inputs a value, apply the shrink class */}
      {label && (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
