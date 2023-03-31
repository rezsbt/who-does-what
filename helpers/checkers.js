const isEmail = (email, validDomains = []) => {
  const isAddressValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.toLowerCase())
  const isDomainValid = !validDomains.length ? true : validDomains.includes(email.toLowerCase().split('@')[1])
  return ({ isValid: isAddressValid && isDomainValid, value: email.toLowerCase() })
}

const isMobilePhoneNumber = phoneNumber => {
  phoneNumber = (phoneNumber.toString()[0] === '9' && phoneNumber.toString().length === 10 ) ? `0${phoneNumber.toString()}` : phoneNumber.toString()
  const isValid = /^09\d{9}$/.test(phoneNumber)
  return { isValid, value: phoneNumber}
}

const isMobilePhoneNumberStrict = phoneNumber => {
  const isValid = /^09\d{9}$/.test(phoneNumber)
  return { isValid, value: phoneNumber.toString() }
}

export { isEmail, isMobilePhoneNumber, isMobilePhoneNumberStrict }