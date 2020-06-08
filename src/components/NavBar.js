import React from 'react'
import {Link} from 'react-router-dom'
// import {ReactComponent as ReactLogo} from './foodswelikelogo.svg';
// import SignUp from './SignUp'
// if you want to import one component in another


function NavBar() {
    return (
      <React.Fragment>
     
       {/* <ReactLogo />
       <div className="logo"> */}

        <div className="navbar-content">
          <Link to="/home">Home</Link>
          <Link to="/restaurants">Restaurants</Link>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/about">About</Link>
          <Link to='/myreviews'>My Reviews</Link>
          {/* <SignUp /> */}
        </div>
      {/* </div> */}
    </React.Fragment>
    );
}

export default NavBar;