import React from 'react';
import './App.css';
import { TextField, Button } from '@mui/material/';
import Header from '../header/Header';


function App() {

const MealsContext = React.createContext({
    meals: [], fetchMeals: () => { }
})
// # Handle the state for the form inputs
const [name, setName] = React.useState('');
const [protein, setProtein] = React.useState('');
const [carbs, setCarb] = React.useState('');
const [fats, setFats] = React.useState('');
const {meals, fetchMeals} = React.useContext(MealsContext)


// # Handle the Submit event
const handleSubmit = (e: any) => {
  e.preventDefault();
  console.log(name, protein, carbs, fats);
  const newMeal = {
    "Name": name,
    "Protein": protein,
    "Carbs": carbs,
    "Fats": fats
  }

  fetch("http://localhost:8000/meals", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newMeal)
  }).then(fetchMeals)
}


  return (
    <div>
      
      {/* # HEADER COMPONENT */}
      <Header></Header>

      

      <div className='center height'>
        <h1>Track your meals</h1>
        </div>
        <form onSubmit={handleSubmit}>
        <div className='center'>
        <TextField className="height3" id="outlined-basic" label="Name of Food" variant="outlined" value={name} onChange={e => setName(e.target.value)} required/>
      </div>
      <div className='center'>
        
        <TextField id="outlined-basic" label="Protein (g)" variant="outlined" value={protein} onChange={e => setProtein(e.target.value)} required/>
        <TextField id="outlined-basic" label="Carbs (g)" variant="outlined" value={carbs} onChange={e => setCarb(e.target.value)} required/>
        <TextField id="outlined-basic" label="Fat (g)" variant="outlined" value={fats} onChange={e => setFats(e.target.value)} required/>
        

      </div>

      <div className="center height2">
      <Button type='submit' variant="contained">Submit</Button>
      </div>
      </form>

    </div>


  );
}

export default App;
