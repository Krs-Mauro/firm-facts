const getCardStyles = (variant, styles) => {
  const classes = [styles.card]

  if (variant === 'border') {
    classes = styles.borderCard
  }

  if (variant.vertical) {
    classes.push(styles.verticalCard)
  }

  return classes.join(' ')
}

export default getCardStyles
