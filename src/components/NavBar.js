import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';


class NavBar extends React.Component {

    render() {
        return (<nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
  
          </div>
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>
            <a href="#">Restaurants</a>
            <a href="#">Reviews</a>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
            <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
          </ul>
        </div>
      </nav>);
      }



}
export default NavBar;