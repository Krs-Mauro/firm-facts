import Button from './Button'
import styles from '../styles/FirmFactsCard.module.scss'
import Cursor from '../icons/Cursor'
import getCardStyles from '../helpers/getCardStyles'

const FirmFactCard = ({ variant }) => {
  const cardClass = getCardStyles(variant, styles)

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
