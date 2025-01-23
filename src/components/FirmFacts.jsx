import FirmFactCard from './FirmFactsCard'
import styles from '../styles/FirmFacts.module.scss'

const FirmFacts = () => {
  return (
    <div className={styles.container}>
      <h1>Firm Facts</h1>
      <div className={styles.grid}>
        <FirmFactCard variant="default" />
        <FirmFactCard variant="default" />
        <FirmFactCard variant="default" />
        <FirmFactCard variant="default" />
        <FirmFactCard variant="border" />
        <FirmFactCard variant="border" />
        <FirmFactCard variant="border" />
      </div>
    </div>
  )
}

export default FirmFacts
