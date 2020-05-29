import React from 'react'
import {Link} from 'react-router-dom'


function NavBar() {
    return (
      <React.Fragment>
      <div className="navbar">
        <div class="navbar-content">
          <Link to="/home">Home</Link>
          <Link to="/restaurants">Restaurants</Link>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </React.Fragment>
    );
}

export default NavBar;