const getCardStyles = (variant, styles) => {
  let classes = []

  if (variant.variant === 'border') {
    classes.push(styles.borderCard)
  } else {
    classes.push(styles.defaultCard)
  }

  if (variant.vertical) {
    classes.push(styles.verticalCard)
  }

  return classes.join(' ')
}

export default getCardStyles
