import React from 'react';

import { Card, CardContent, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import Header from '../header/Header';
import './Meals.css';



interface MealType {
    Name: string;
    Protein: number;
    Carbs: number;
    Fats: number;
}

function Meals() {
    const [meals, setMeals] = React.useState([])
    const fetchMeals = async () => {
        const response = await fetch("http://0.0.0.0:8000/meals")
        const meals = await response.json()
        setMeals(meals.data);
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
                <div className="center">
                    <h1>{"Track your macros"}</h1>
                </div>
                <div className="height wrap spacer">
                    {
                        meals.map((meal: MealType) => (
                            <MealCard Name={meal.Name} Protein={meal.Protein} Carbs={meal.Carbs} Fats={meal.Fats}></MealCard>
                        ))
                    }
                </div>
            </MealsContext.Provider>
        </div>
    )

}

function MealCard(meal: MealType) {
    return (
        <Card className="chart-card">
            <CardContent className="separator">
                <div>
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
                </div>
                <div>
                    <MealChart Name={meal.Name} Protein={meal.Protein} Carbs={meal.Carbs} Fats={meal.Fats}></MealChart>
                </div>
            </CardContent>
        </Card>
    )
}
function MealChart(meal: MealType) {

    const data = [
        {
            name: meal.Name,
            Protein: meal.Protein,
            Carbs: meal.Carbs,
            Fats: meal.Fats,
        }
    ];

    return (

        <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Protein" fill="#0A2F51" />
            <Bar dataKey="Carbs" fill="#0E4D64" />
            <Bar dataKey="Fats" fill="#137177" />
        </BarChart>
    )
}

export default Meals;