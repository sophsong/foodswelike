import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import MainContainer from './containers/MainContainer'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import About from './components/About'
import SignUp from './components/SignUp'
import Restaurants from './components/Restaurants'
import LogIn from './components/LogIn'

import Home from './components/Home'

class App extends Component {
  render(){
    return (
     <div className="App">
       <Router>
       <NavBar />
       <Route exact path='/home' component={Home}/>
       {/* need exact path in order for the about path to not render the above too */}
       <Route path='/about' component={About}/>
       <Route path='/restaurants' component={Restaurants}/>
       <Route path='/signup' component={SignUp}/>
       <Route path='/login' component={LogIn}/>

        
       </Router>
      </div>
    );
  }
}

export default App;
