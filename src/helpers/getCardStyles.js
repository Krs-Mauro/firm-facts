const getCardStyles = (variant, styles) => {
  const classes = [styles.card]

  if (variant.background === 'default') {
    classes.push(styles.defaultCard)
  } else if (variant.background === 'variant') {
    classes.push(styles.variantBackground)
  }

  if (variant.border === 'variant') {
    classes.push(styles.variantBorder)
  }

  if (variant.position === 'variant') {
    classes.push(styles.variantPosition)
  }

  if (variant.vertical) {
    classes.push(styles.verticalCard)
  }

  return classes.join(' ')
}

export default getCardStyles
