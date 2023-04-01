import { isMobilePhoneNumber, isEmail } from "./checkers"

const developerDetailsValidation = ({ firstName, lastName, phone, email, job }) => {
  
  const errors = {}
  
  // First name
  if (!firstName) errors.firstName = 'First name is required'
  else if (firstName.length < 3) errors.firstName = 'First name must be more than 3 letters'
  else delete errors.firstName
  
  // Last name
  if (!lastName) errors.lastName = 'Last name is required'
  else if (lastName.length < 3) errors.lastName = 'Last name must be more than 3 letters'
  else delete errors.lastName
  
  // Job title
  if (!job) errors.job = 'Job is required'
  else if (job.length < 3) errors.job = 'Job must be more than 3 letters'
  else delete errors.job
  
  // Phone number
  if (!phone) errors.phone = 'Phone number is required'
  else if (!isMobilePhoneNumber(phone).isValid) errors.phone = 'Phone number is invalid'
  else delete errors.phone
  
  // Email address
  if (email === '') delete errors.email
  else if (!isEmail(email, ['gmail.com', 'yahoo.com']).isValid) errors.email = 'Email address is invalid'
  else delete errors.email
  
  return errors
  
}

const developerSkillsValidation = data => {
  
  const errors = {}
  
  
  
  return errors
  
}

export { developerDetailsValidation, developerSkillsValidation }