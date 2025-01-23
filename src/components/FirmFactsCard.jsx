import Button from './Button'
import styles from '../styles/FirmFactsCard.module.scss'
import Cursor from '../icons/Cursor'

const FirmFactCard = ({ variant }) => {
  const getStyles = (variant) => {
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

  const cardClass = getStyles(variant)

  return (
    <div className={cardClass}>
      <div className={styles.subCard}>
        <Button variant={variant.button} />
        {variant.text && <p className={styles.text}>{variant.text}</p>}
      </div>

      {variant.cursorIcon && (
        <div className={styles.cursorIcon}>
          <Cursor />
        </div>
      )}
    </div>
  )
}

export default FirmFactCard
