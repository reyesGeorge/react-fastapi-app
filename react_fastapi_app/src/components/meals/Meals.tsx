import React from 'react';

import { Card, Grid, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import Header from '../header/Header';
import './Meals.css';



interface MealType {
    Name: string;
    Protein: number;
    Carbs: number;
    Fats: number;
};

async function fetchMeals() {
    const response = await fetch("http://0.0.0.0:8000/meals")
    const meals = await response.json()
    return meals
};


function Meals() {
    const [meals, setMeals] = React.useState([]);
    React.useEffect(() => {
        fetchMeals().then((json => {
            setMeals(json["data"]);
        }));
    }, []);

    return (
        <div>
            {/* # HEADER COMPONENT */}
            <Header></Header>
            <div className="height center">
                <h1>{"Track your macros"}</h1>
            </div>
            <Grid container spacing={2} id="height">
                <Grid item xs={2} md={2} lg={2} xl={2} />
                <Grid item xs={8} md={8} lg={8} xl={8}>
                    <Grid container spacing={3} className="card-bottom-margin">
                        {
                            meals.map((meal: MealType, index: number) => (
                                <Grid key={index.toString() + meal.Name} item xs={6} md={6} lg={6} xl={6}>
                                    <MealCard Name={meal.Name} Protein={meal.Protein} Carbs={meal.Carbs} Fats={meal.Fats} />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Grid>
                <Grid item xs={2} md={2} lg={2} xl={2} />
            </Grid>
        </div>
    )
}

function MealCard(meal: MealType) {
    return (
        <Card className="chart-card">
            <Grid container spacing={2} sx={{ margin: "1rem" }}>
                <Grid item xs={3} md={3} lg={3} xl={3}>
                    <Typography variant="h5" component="div">
                        {meal.Name}
                    </Typography>
                    <Typography variant="body2">
                        Protein: {Intl.NumberFormat('en-US', {
                            notation: "compact",
                            compactDisplay: "short",
                        }).format(meal.Protein)+"g"}
                        <br />
                        Carbs: {Intl.NumberFormat('en-US', {
                            notation: "compact",
                            compactDisplay: "short",
                        }).format(meal.Carbs)+"g"}
                        <br />
                        Fats: {Intl.NumberFormat('en-US', {
                            notation: "compact",
                            compactDisplay: "short",
                        }).format(meal.Fats)+"g"}
                    </Typography>
                </Grid>
                <Grid item xs={7} md={7} lg={7} xl={7}>
                    <MealChart Name={meal.Name} Protein={meal.Protein} Carbs={meal.Carbs} Fats={meal.Fats} />
                </Grid>
                <Grid item xs={2} md={2} lg={2} xl={2}/>
            </Grid>
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
            width={350}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 0,
                bottom: 5
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={(value) =>
                Intl.NumberFormat("en-US", {
                    notation: "compact",
                    compactDisplay: "short",
                }).format(value)
            } />
            {/* <Tooltip formatter={(value: number) => value && Intl.NumberFormat('en-US', {
                notation: "compact",
                compactDisplay: "short"
            }).format(value)+"g"} /> */}
            <Legend />
            <Bar dataKey="Protein" fill="#0A2F51" />
            <Bar dataKey="Carbs" fill="#0E4D64" />
            <Bar dataKey="Fats" fill="#137177" />
        </BarChart>
    )
}

export default Meals;