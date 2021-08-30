import classes from "./MealItem.module.css"
import MealItemForm from "./MealItemForm"

const MealtItem = ({ id, name, price, description }) => {
  console.log("id", id)
  const formatPrice = price ?? price.toFixed(2)
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
      </div>
      <div className={classes.description}>{description}</div>
      <div className={classes.price}>{formatPrice}</div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  )
}

export default MealtItem
