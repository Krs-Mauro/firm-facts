const getButtonStyles = (variant, styles) => {
  const baseClass = styles.button
  const classes = [baseClass]

  if (variant.background === 'variant') {
    classes.push(styles.variantBackground)
  }
  if (variant.border === 'variant') {
    classes.push(styles.variantBorder)
  }
  if (variant.disabled) {
    classes.push(styles.variantDisabled)
  }

  return classes.join(' ')
}

export default getButtonStyles
