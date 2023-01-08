import React from 'react';
import './App.css';
import { TextField, Button } from '@mui/material/';
import Header from '../header/Header';


function App() {

// # Handle the state for the form inputs
const [name, setName] = React.useState('');
const [protein, setProtein] = React.useState('');
const [carbs, setCarb] = React.useState('');
const [fats, setFats] = React.useState('');


// # Handle the Submit event
const handleSubmit = (e: any) => {
  e.preventDefault();
  const newMeal = {
    "Name": name,
    "Protein": protein,
    "Carbs": carbs,
    "Fats": fats
  }

  fetch("http://0.0.0.0:8000/meals", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newMeal)
  });

  setName("");
  setProtein("");
  setCarb("");
  setFats("");
}


  return (
    <div>
      {/* # HEADER COMPONENT */}
      <Header></Header>
      <div className='center height'>
        <h1>{"Track your meals"}</h1>
        </div>
        <form onSubmit={handleSubmit}>
        <div className='center'>
        <TextField className="height3 wid2" id="outlined-basic" type="text" label="Name of Food" variant="outlined" value={name} onChange={e => setName(e.target.value)} required/>
      </div>
      <div className='center'>
        <TextField id="outlined-basic" type="number" label="Protein (g)" variant="outlined" value={protein} onChange={e => setProtein(e.target.value)} required/>
        <TextField id="outlined-basic" type="number" label="Carbs (g)" variant="outlined" value={carbs} onChange={e => setCarb(e.target.value)} required/>
        <TextField id="outlined-basic" type="number" label="Fat (g)" variant="outlined" value={fats} onChange={e => setFats(e.target.value)} required/>
      </div>
      <div className="center height2">
      <Button type='submit' variant="contained">{"Submit"}</Button>
      </div>
      </form>
    </div>
  );
}

export default App;
