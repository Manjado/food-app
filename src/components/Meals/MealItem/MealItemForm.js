import { useRef, useState } from "react"
import Input from "../../UI/Input"
import classes from "./MealItemForm.module.css"

const MealItemForm = (props) => {
  const [amountIsValid, setAmountisValied] = useState(true)
  const amountInutRef = useRef()

  const submitHandler = (event) => {
    event.preventDefault()

    const enteredAmount = amountInutRef.current.value
    const enteredAmountNumber = +enteredAmount

    if (
      enteredAmount.trim().lenght === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountisValied(false)
      return
    }

    props.onAddToCart(enteredAmountNumber)
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInutRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  )
}

export default MealItemForm
