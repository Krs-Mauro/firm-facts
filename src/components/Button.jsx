import MagGlassIcon from '../icons/MagGlass'
import styles from '../styles/Button.module.scss'
import getButtonStyles from '../helpers/getButtonStyles'

const Button = ({ variant }) => {
  const buttonClass = getButtonStyles(variant, styles)

  return (
    <button className={buttonClass}>
      {variant.variant === 'icon' && (
        <div>
          <MagGlassIcon />
        </div>
      )}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nisi recusandae quos
        accusantium, omnis molestias veniam hic natus vitae. Eaque nulla odit assumenda atque ea
        possimus exercitationem, architecto minima. Atque!
      </p>
    </button>
  )
}

export default Button
