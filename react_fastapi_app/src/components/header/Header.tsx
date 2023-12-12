import { Button, Link } from '@mui/material/';

import './Header.css';


function Header() {
  return (
      <div className="header">
        <Button href="/" style={{ marginLeft: "3rem" }} color="inherit"><h1>{"Fast Meals"}</h1></Button>
        <div className="right-padding header top-padding">
          <Link className="right-padding-2" id="a-link" href="/home" color="inherit"><h3>{"Add Meals"}</h3></Link>
          <Link id="a-link" href="/meals" color="inherit"><h3>{"View Meals"}</h3></Link>
        </div>
      </div>      
  )
}

export default Header;