import { useContext } from "react"
import classes from "./MealItem.module.css"
import MealItemForm from "./MealItemForm"
import CartContext from "../../../store/cart-context"

const MealtItem = ({ id, name, price, description }) => {
  const cartCtx = useContext(CartContext)
  const formatPrice = price ?? price.toFixed(2)

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id,
      name,
      amount,
      price,
    })
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
      </div>
      <div className={classes.description}>{description}</div>
      <div className={classes.price}>{formatPrice}</div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  )
}

export default MealtItem
