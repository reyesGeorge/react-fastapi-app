import { Button, Card, CardActions, CardContent, Stack, Typography } from '@mui/material';
import React from 'react';
import Header from '../header/Header';
import './Meals.css';


interface MealType {
    Name: string;
    Protein: string;
    Carbs: number;
    Fats: number;
}
//   <MealCard name={meal.Name} protein={meal.Protein} carbs={meal.Carbs} fats={meal.Fats} fetchMeals={fetchMeals}></MealCard>

function Meals() {

    const [meals, setMeals] = React.useState([])
    const fetchMeals = async () => {
        const response = await fetch("http://localhost:8000/meals")
        const meals = await response.json()
        setMeals(meals.data)
        console.log(meals.data)
    }
    React.useEffect(() => {
        fetchMeals()
    }, [])
    const MealsContext = React.createContext({
        meals: [], fetchMeals: () => { }
    })


    return (

        <div>
            {/* # HEADER COMPONENT */}
            <Header></Header>
            <MealsContext.Provider value={{ meals, fetchMeals }}>
                <div className="height">
                <Stack spacing={2}>
                    {
                        meals.map((meal: MealType) => (

                            <Card sx={{ minWidth: 275 }} >
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {meal.Name}
                                    </Typography>
                                    <Typography variant="body2">
                                        Protein: {meal.Protein}
                                        <br />
                                        Carbs: {meal.Carbs}
                                        <br />
                                        Fats: {meal.Fats}

                                    </Typography>
                                </CardContent>
                            </Card>


                        ))
                    }


                </Stack>
                </div>

            </MealsContext.Provider>
        </div>
    )

}

export default Meals;