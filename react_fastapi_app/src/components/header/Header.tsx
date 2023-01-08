import { AppBar, Button } from '@mui/material/';
import './Header.css';


function Header(){
    return (
        <div>  
        <AppBar>
          <div className="header">
            <Button href="/" style={{marginLeft: "3rem"}} color="inherit"><h1>{"Fast Meals"}</h1></Button>
            <div className="links rightPadding">
            <Button href="/home" color="inherit"><h3>{"Add Meals"}</h3></Button>
            <Button href="/meals" color="inherit"><h3>{"View Meals"}</h3></Button>
            </div>
          </div>
        
      </AppBar>

      </div>
    )
}

export default Header;