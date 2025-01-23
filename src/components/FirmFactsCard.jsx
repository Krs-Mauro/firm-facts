import Button from './Button'
import styles from '../styles/FirmFactsCard.module.scss'

const FirmFactCard = ({ variant }) => {
  const { card, defaultCard, variantCard, border } = styles

  const getStyles = (variant) => {
    const styles = card
    if (variant.background === 'default') {
      return `${styles} ${defaultCard}`
    } else if (variant.background === 'variant') {
      return `${styles} ${variantCard}`
    }

    console.log(styles)
    return styles
  }

  const cardClass = getStyles(variant)

  return (
    <div className={defaultCard}>
      <Button variant={variant.Button} />
    </div>
  )
}

export default FirmFactCard

/* Card 

position: absolute;
width: 364px;
height: 662px;

background: #FFFFFF;


/* Card 

position: absolute;
width: 364px;
height: 322px;

background: #FFFFFF;


/* Card 

position: absolute;
width: 364px;
height: 322px;

background: #FFFFFF;


/* Card 

position: absolute;
width: 364px;
height: 322px;

background: #FFFFFF;


/* Card 

position: absolute;
width: 364px;
height: 322px;

background: #FFFFFF;


/* Close 

position: absolute;
width: 44px;
height: 44px;

background: #FFFFFF;


/* Line 

position: absolute;
width: 43.94px;
height: 44px;

background: #FFFFFF;


/* Line Copy 

position: absolute;
width: 43.94px;
height: 44px;

background: #FFFFFF;


/* Card Hover 

position: absolute;
width: 364px;
height: 322px;

background: #07C06A;


/* Cursor 

position: absolute;
width: 24px;
height: 24px;



/* Icon 

position: absolute;
left: 21.44%;
right: 20.83%;
top: 12.5%;
bottom: 16.67%;

background: #FFFFFF;
border: 1px solid #000000;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);


/* Path 

position: absolute;
left: 21.44%;
right: 20.83%;
top: 12.5%;
bottom: 16.67%;

background: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.8);
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);


/* Path 

position: absolute;
left: 66.67%;
right: 29.17%;
top: 50%;
bottom: 33.33%;

background: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.8);
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);


/* Path 

position: absolute;
left: 58.33%;
right: 37.5%;
top: 50%;
bottom: 33.33%;

background: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.8);
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);


/* Path 

position: absolute;
left: 50%;
right: 45.83%;
top: 50%;
bottom: 33.33%;

background: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.8);
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);


/* Card Hover 

box-sizing: border-box;

position: absolute;
width: 364px;
height: 322px;

background: #FFFFFF;
border: 15px solid #07C06A;


/* Cursor 

position: absolute;
width: 24px;
height: 24px;



/* Icon 

position: absolute;
left: 21.44%;
right: 20.83%;
top: 12.5%;
bottom: 16.67%;

background: #FFFFFF;
border: 1px solid #000000;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);


/* Path 

position: absolute;
left: 21.44%;
right: 20.83%;
top: 12.5%;
bottom: 16.67%;

background: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.8);
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);


/* Path 

position: absolute;
left: 66.67%;
right: 29.17%;
top: 50%;
bottom: 33.33%;

background: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.8);
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);


/* Path 

position: absolute;
left: 58.33%;
right: 37.5%;
top: 50%;
bottom: 33.33%;

background: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.8);
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);


/* Path 

position: absolute;
left: 50%;
right: 45.83%;
top: 50%;
bottom: 33.33%;

background: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.8);
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
*/
