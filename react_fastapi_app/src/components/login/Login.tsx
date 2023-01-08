import { Button, Card, CardContent, Grid, Link, TextField, Typography } from '@mui/material/';
import MealLogo from '../../assets/mealSVG.svg';
import './Login.css';

function Login() {
    return (
        <div>
            <Grid container spacing={2}>
                {/* # GRID ROW 1 */}
                <Grid item xs={1} md={1}>
                    <br></br>
                </Grid>
                <Grid item xs={10} md={7}>
                    <h1>{"Fast Meals"}</h1>
                </Grid>

                <Grid item xs={1} md={4}>
                    <br></br>
                </Grid>

                {/* # GRID ROW 2 */}
                <Grid item xs={1} md={.5}>
                    <br></br>
                </Grid>
                <Grid item xs={10} md={5.5}>
                    <img src={MealLogo} alt="Meals Logo" />
                </Grid>
                <Grid item xs={1} md={.5}>
                    <br></br>
                </Grid>
                <Grid item xs={1} md={.5}>
                    <br></br>
                </Grid>
                <Grid item xs={10} md={4} spacing={3} direction="column">
                    <div className="height2">
                        <Card>
                            <CardContent>
                                
                                <div className="bottom3">
                                    <Typography variant="h4" component="div">
                                        {"Sign In"}
                                    </Typography>
                                </div>

                                {/* <TextField id="outlined-basic" type="number" label="Protein (g)" variant="outlined" value={protein} onChange={e => setProtein(e.target.value)} required/> */}
                                <div className="height3">
                                    <Typography variant="body2">
                                        {"Username"}
                                    </Typography>
                                    <TextField className="wid" id="outlined-basic" type="text" variant="outlined" required />
                                </div>
                                <div className="height3">
                                    <Typography variant="body2">
                                        {"Password"}
                                    </Typography>
                                    <TextField className="wid" id="outlined-basic" type="text" variant="outlined" required />
                                </div>

                                <Button className="wid" type='submit' variant="contained">{"Submit"}</Button>


                            </CardContent>
                        </Card>

                        {/* # Sub Grid at Base of Card */}
                        <Grid container direction="row">
                            <Grid item xs={6} md={5}>
                                <Typography variant="body2">
                                    {"Don't have an account?"}
                                </Typography>
                            </Grid>
                            <Grid item xs={4} md={4}>
                                <Link href="/signup" color="primary">{"Sign Up"}</Link>
                            </Grid>
                            <Grid item xs={2} md={3}>
                                <br></br>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item xs={1} md={1}>
                    <br></br>
                </Grid>

            </Grid>
        </div>
    )
}

export default Login;