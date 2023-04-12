const errorDivider = (title, message, dividerCharacter = '*', repeatCharacter = 20) => {
  const divider = dividerCharacter.repeat(+repeatCharacter)
  console.log(`${divider} ${title.toUpperCase()} ${divider}`)
  console.log(message)
  console.log(`${divider} ${title.toUpperCase()} ${divider}`)
}

const levelValueToLabel = level => {
  switch (level) {
    case 'BASIC': return 'Basic'
    case 'INTERMEDIATE': return 'Intermediate'
    case 'ADVANCED': return 'Advanced'
    default: return 'Basic'
  }
}

const defaultAjaxError = (statusCode, message) => {
  alert(`Error ${statusCode} - ${message}`)
}

export { errorDivider, levelValueToLabel, defaultAjaxError } 