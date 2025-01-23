import FirmFactCard from './FirmFactsCard'
import styles from '../styles/FirmFacts.module.scss'
import CARDS from '../constants/cards'
import Close from '../icons/Close'

const FirmFacts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.iconDiv}>
        <Close />
      </div>

      <h1>Firm Facts</h1>

      <hr />
      <div className={styles.grid}>
        {CARDS.map((card) => (
          <FirmFactCard key={card.id} variant={card} />
        ))}
      </div>
    </div>
  )
}

export default FirmFacts
