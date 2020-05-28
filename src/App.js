import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import MainContainer from './containers/MainContainer'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './components/Home'

class App extends Component {
  render(){
    return (
     <div className="App">
       <Router>
       <NavBar />
       <Route exact path='/' component={Home}/>
       {/* <Route exact path='/' component={About}/> */}
        
       </Router>
      </div>
    );
  }
}

export default App;
