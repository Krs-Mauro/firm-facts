import MagGlassIcon from '../icons/MagGlass'
import styles from '../styles/Button.module.scss'
import getButtonStyles from '../helpers/getButtonStyles'

const Button = ({ variant }) => {
  const buttonClass = getButtonStyles(variant, styles)

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
