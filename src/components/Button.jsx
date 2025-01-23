import MagGlassIcon from '../icons/MagGlass'
import styles from '../styles/Button.module.scss'

const Button = ({ variant }) => {
  const getStyles = (variant) => {
    const baseClass = styles.button
    const classes = [baseClass]

    if (variant.background === 'variant') {
      classes.push(styles.variantBackground)
    }
    if (variant.border === 'variant') {
      classes.push(styles.variantBorder)
    }
    if (variant.disabled) {
      classes.push(styles.variantDisabled)
    }

    return classes.join(' ')
  }

  const buttonClass = getStyles(variant)

  return (
    <button className={buttonClass}>
      {variant.icon && (
        <div>
          <MagGlassIcon />
        </div>
      )}
      <p>{variant.text}</p>
    </button>
  )
}

export default Button
