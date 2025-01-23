import MagGlassIcon from '../icons/MagGlass'
import styles from '../styles/Button.module.scss'

const Button = ({ variant = 'default', children, disabled }) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${disabled ? styles.disabled : ''}`

  return (
    <button className={buttonClass} disabled={disabled}>
      {variant === 'icon' && <MagGlassIcon />}
      <span className={styles.text}>{children}</span>
    </button>
  )
}

export default Button
