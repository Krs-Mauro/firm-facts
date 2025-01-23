const getButtonStyles = (variant, styles) => {
  const baseClass = styles.button
  const classes = [baseClass]

  if (variant.variant === 'default') {
    classes.push(styles.defaultButton)
  }
  if (variant.variant === 'icon') {
    classes.push(styles.iconButton)
  }
  if (variant.disabled) {
    classes.push(styles.variantDisabled)
  }

  return classes.join(' ')
}

export default getButtonStyles
