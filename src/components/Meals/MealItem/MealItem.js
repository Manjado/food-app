import classes from "./MealItem.module.css"

const MealtItem = ({ name, price, description }) => {
  const formatPrice = price ?? price.toFixed(2)
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
      </div>
      <div className={classes.description}>{description}</div>
      <div className={classes.price}>{formatPrice}</div>
      <div></div>
    </li>
  )
}

export default MealtItem
