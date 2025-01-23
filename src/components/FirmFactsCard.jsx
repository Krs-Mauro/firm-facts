import Button from './Button'
import styles from '../styles/FirmFactsCard.module.scss'

const FirmFactCard = ({ variant = 'default' }) => {
  const cardClass = `${styles.card} ${styles[variant]}`

  return (
    <div className={cardClass}>
      <Button variant="icon">This is a two line button that terminates with...</Button>
    </div>
  )
}

export default FirmFactCard
