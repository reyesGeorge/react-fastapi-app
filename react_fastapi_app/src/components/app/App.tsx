import React from "react";

import { TextField, Button, Card, Typography, Grid, CircularProgress, Slide, SlideProps, Snackbar } from "@mui/material/";

import Header from "../header/Header";
import "./App.css";

interface MealInterface {
  Name: string;
  Protein: string;
  Carbs: string;
  Fats: string;
}
type TransitionProps = Omit<SlideProps, 'direction'>;



async function mealSender(newMeal: MealInterface) {
  const response = await fetch("http://0.0.0.0:8000/meals", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newMeal)
  });
  return await response.json();
}

function TransitionLeft(props: TransitionProps) {
  return <Slide {...props} direction="right" />;
}



function App() {
  // # Handle the state for the form inputs
  const [name, setName] = React.useState("");
  const [protein, setProtein] = React.useState("");
  const [carbs, setCarb] = React.useState("");
  const [fats, setFats] = React.useState("");
  const [loader, setLoader] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState<React.ComponentType<TransitionProps> | undefined>(undefined);
  const handleClick = (Transition: React.ComponentType<TransitionProps>) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // # Handle the Submit event
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoader(true);
    const newMeal = {
      "Name": name,
      "Protein": protein,
      "Carbs": carbs,
      "Fats": fats
    };
    mealSender(newMeal);
    setName("");
    setProtein("");
    setCarb("");
    setFats("");
    setLoader(false);
  }


  return (
    <div>
      {/* # HEADER COMPONENT */}
      <Header></Header>

      {/* # FORM COMPONENT */}
      <form onSubmit={handleSubmit}>
        <div className="center">
          <Card elevation={3} style={{ marginTop: "4rem" }}>
            <Grid container spacing={2}>

              <Grid item xs={2} md={2} lg={2} xl={2}></Grid>
              <Grid item xs={8} md={8} lg={8} xl={8} id="top-margin" className="bottom-padding">
                <h1>{"Track your meals"}</h1>
                <Typography variant="h5" component="div">
                  {"Add a meal name"}
                </Typography>
                <TextField className="full-width" type="text" variant="outlined" value={name} onChange={e => setName(e.target.value)} required />
              </Grid>
              <Grid item xs={2} md={2} lg={2} xl={2}></Grid>

              <Grid item xs={2} md={2} lg={2} xl={2}></Grid>
              <Grid item xs={8} md={8} lg={8} xl={8} className="bottom-padding">
                <Typography variant="h5" component="div">
                  {"Protein (g)"}
                </Typography>
                <TextField className="full-width" type="number" variant="outlined" value={protein} onChange={e => setProtein(e.target.value)} required />
              </Grid>
              <Grid item xs={2} md={2} lg={2} xl={2}></Grid>

              <Grid item xs={2} md={2} lg={2} xl={2}></Grid>
              <Grid item xs={8} md={8} lg={8} xl={8} className="bottom-padding">
                <Typography variant="h5" component="div">
                  {"Carbs (g)"}
                </Typography>
                <TextField className="full-width" type="number" variant="outlined" value={carbs} onChange={e => setCarb(e.target.value)} required />
              </Grid>
              <Grid item xs={2} md={2} lg={2} xl={2}></Grid>

              <Grid item xs={2} md={2} lg={2} xl={2}></Grid>
              <Grid item xs={8} md={8} lg={8} xl={8} id="bottom-margin">
                <Typography variant="h5" component="div">
                  {"Fat (g)"}
                </Typography>
                <TextField className="full-width" type="number" variant="outlined" value={fats} onChange={e => setFats(e.target.value)} required />
              </Grid>
              <Grid item xs={2} md={2} lg={2} xl={2}></Grid>
            </Grid>
          </Card>
        </div>

        <div className="top-padding center button-height">
          {loader ? <CircularProgress /> : <Button type="submit" onClick={handleClick(TransitionLeft)} variant="contained">{"Submit"}</Button>}
          <Snackbar
            open={open}
            autoHideDuration={2000}
            onClose={handleClose}
            TransitionComponent={transition}
            message="Your meal was added!"
            key={transition ? transition.name : ''}
            ContentProps={{
              sx: {
                background: "lightseagreen"
              }
            }}
          />
        </div>

      </form>
    </div>
  );
}

export default App;
