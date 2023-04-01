// Helpers
import { isEmail, isMobilePhoneNumberStrict } from "./checkers"

const developerValidation = data => {
  const { firstName, lastName, phone, email, job } = data
  if (!firstName && firstName.length < 3) return false
  if (!lastName && firstName.length < 3) return false
  if (!isMobilePhoneNumberStrict(phone).isValid) return false
  if (!!email && !isEmail(email, ['gmail.com', 'yahoo.com']).isValid ) return false
  if (!job && job.length < 3) return false
  return true
}

const skillsValidation = data => {
  return data.every(skill => !!skill.title && ['BASIC', 'INTERMEDIATE', 'ADVANCED'].includes(skill.level))
}

export { developerValidation, skillsValidation }