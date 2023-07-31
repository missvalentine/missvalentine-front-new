import { EmailRegex, nameRegex, phoneRegex } from './regEx'

export const isValidEmail = (_value, setValue, setErrorMessage) => {
  let errorMessage = ''

  //condition
  if (!_value) {
    errorMessage = 'Email is required.'
  } else if (!EmailRegex.test(_value)) {
    errorMessage = 'Please Enter a valid Email.'
  }

  setValue(_value)
  setErrorMessage(errorMessage)
  return errorMessage.length === 0
}

export const isValidPassword = (_value, setValue, setErrorMessage) => {
  let errorMessage = ''

  //condition
  if (!_value) {
    errorMessage = 'Password is required.'
  } else if (_value.length < 8) {
    errorMessage = 'Password must be at least 8 characters.'
  } else if (_value.search(/[a-z]/i) < 0 && _value.search(/[A-Z]/i) < 0) {
    errorMessage =
      'Password must contain at least one lower case & uppercase letter.'
  } else if (_value.search(/[0-9]/) < 0) {
    errorMessage = 'Your password must contain at least one digit.'
  }

  setValue(_value)
  setErrorMessage(errorMessage)
  return errorMessage.length === 0
}

export const isValidName = (
  _value,
  setValue,
  setErrorMessage,
  skipRequired = false,
) => {
  let errorMessage = ''

  //condition
  if (!skipRequired || !_value) {
    errorMessage = 'Name is required.'
  } else if (!nameRegex.test(_value)) {
    errorMessage = 'Please Enter a valid Name.'
  }

  setValue(_value)
  setErrorMessage(errorMessage)
  return errorMessage.length === 0
}
export const isValidPhone = (
  _value,
  setValue,
  setErrorMessage,
  skipRequired = false,
) => {
  let errorMessage = ''

  //condition
  if (!skipRequired || !_value) {
    errorMessage = 'Phone is required.'
  } else if (_value.length !== 10) {
    errorMessage = 'Please Enter a valid 10 digit Phone.'
  } else if (!phoneRegex.test(_value)) {
    errorMessage = 'Please Enter a valid Phone.'
  }

  setValue(_value)
  setErrorMessage(errorMessage)
  return errorMessage.length === 0
}
