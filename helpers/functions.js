const errorDivider = (title, message, dividerCharacter = '*', repeatCharacter = 20) => {
  const divider = dividerCharacter.repeat(+repeatCharacter)
  console.log(`${divider} ${title.toUpperCase()} ${divider}`)
  console.log(message)
  console.log(`${divider} ${title.toUpperCase()} ${divider}`)
}

export { errorDivider } 