import Button from './Button'
import styles from '../styles/FirmFactsCard.module.scss'
import getCardStyles from '../helpers/getCardStyles'

const FirmFactCard = ({ variant }) => {
  const cardClass = getCardStyles(variant, styles)

  return (
    <div className={cardClass}>
      <Button variant={variant.button} />
    </div>
  )
}

export default FirmFactCard
