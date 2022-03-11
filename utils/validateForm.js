export default function validateForm(inputs) {
  let errors = {};
  const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  const phoneRegex = /^[\+\d]?(?:[\d-.\s()]*)$/;

  // Check valid email
  if (!inputs.emailPhone) {
    errors.emailPhone = 'Email or phone number required.';
  } else if (!emailRegex.test(inputs.emailPhone) && !phoneRegex.test(inputs.emailPhone)) {
    errors.emailPhone = 'Must be a valid phone or email.';
  }

  if (!inputs.password) {
    errors.password = 'Password Required';
  } else if (inputs.password.length < 6 || inputs.password.length > 18) {
    errors.password = 'Password must be between 6 and 18 characters.';
  }

  if (inputs.password2.length !== 0) {
    if (inputs.password !== inputs.password2) {
      errors.password2 = 'Please make sure passwords match.';
    }
  }

  return errors;
}
