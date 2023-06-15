import { useMealsListContext } from "../providers/MealsProvider";

const MealsList = () => {

    const { meals } = useMealsListContext();

    return (
        <div>
            <h3>Meals list using Context API</h3>
            {
                meals.map((meal, index) => (
                    <h4 key={index}> {meal} </h4>

                ))
            }
        </div>
    )
}

export default MealsList;