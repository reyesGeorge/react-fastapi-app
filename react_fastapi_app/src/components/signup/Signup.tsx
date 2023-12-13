import { Button, Card, CardContent, Grid, Link, TextField, Typography } from '@mui/material/';

import MealLogo from '../../assets/mealSVG.svg';
import './Signin.css';


function Signup() {
    return (
        <div>
            <Grid container spacing={2}>
                {/* # GRID ROW 1 */}
                <Grid item xs={1} md={1} />
                <Grid item xs={10} md={7}>
                    <h1>{"Fast Meals"}</h1>
                </Grid>
                <Grid item xs={1} md={4} />

                {/* # GRID ROW 2 */}
                <Grid item xs={1} md={.5} />
                <Grid item xs={10} md={5.5}>
                    <img src={MealLogo} alt="Meals Logo" />
                </Grid>
                <Grid item xs={1} md={.5} />
                <Grid item xs={1} md={.5} />

                <Grid item xs={10} md={4}>
                    <Grid container direction="column" spacing={3}>
                        <div className="card-height">
                            <Card>
                                <CardContent>
                                    <div className="bottom-margin">
                                        <Typography variant="h4" component="div">
                                            {"Sign Up"}
                                        </Typography>
                                    </div>
                                    <div className="bottom-margin">
                                        <Typography variant="body2">
                                            {"Username"}
                                        </Typography>
                                        <TextField className="full-width" type="text" variant="outlined" required />
                                    </div>
                                    <div className="bottom-margin">
                                        <Typography variant="body2">
                                            {"Password"}
                                        </Typography>
                                        <TextField className="full-width" type="text" variant="outlined" required />
                                    </div>
                                    <Button href="/home" className="full-width" type='submit' variant="contained">{"Submit"}</Button>
                                </CardContent>
                            </Card>

                            {/* # SUB GRID AT BASE OF CARD */}
                            <Grid container direction="row" className="sub-row-height">
                                <Grid item xs={6} md={5}>
                                    <Typography variant="body2">
                                        {"Don't have an account?"}
                                    </Typography>
                                </Grid>
                                <Grid item xs={4} md={4}>
                                    <Link href="/signup" color="primary">{"Sign Up"}</Link>
                                </Grid>
                                <Grid item xs={2} md={3} />
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
                <Grid item xs={1} md={1} />
            </Grid>
        </div>
    )
}

export default Signup;