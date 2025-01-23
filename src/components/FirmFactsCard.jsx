import Button from './Button'
import styles from '../styles/FirmFactsCard.module.scss'
import getCardStyles from '../helpers/getCardStyles'

const FirmFactCard = ({ variant }) => {
  const cardClass = getCardStyles(variant, styles)

  return (
    <div className={cardClass}>
      <div className={styles.subCard}>
        <Button variant={variant.button} />
      </div>
    </div>
  )
}

export default FirmFactCard
