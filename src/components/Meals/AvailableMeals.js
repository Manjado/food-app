import { useEffect, useState } from "react"
import Card from "../UI/Card"
import MealItem from "./MealItem/MealItem"
import classes from "./AvailableMeals.module.css"

const AvailableMeals = () => {
  const [meals, setMeals] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [httpError, setHttpError] = useState(undefined)

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          "https://food-app-994e5-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
        )

        if (!response.ok) {
          throw new Error("Request failed!")
        }

        const responseData = await response.json()

        const loadedMeals = []

        for (const key in responseData) {
          loadedMeals.push({
            id: key,
            name: responseData[key].name,
            description: responseData[key].description,
            price: responseData[key].price,
          })
        }

        setMeals(loadedMeals)
        setIsLoading(false)
      } catch (err) {
        setIsLoading(false)
        setHttpError(err.message)
        console.log(err)
      }
    }

    fetchMeals()
  }, [])

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    )
  }

  if (httpError) {
    return <section className={classes.MealsError}>{httpError}</section>
  }

  const mealsList = meals.map((meal) => (
    <MealItem key={meal.id} id={meal.id} {...meal} />
  ))
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  )
}

export default AvailableMeals
