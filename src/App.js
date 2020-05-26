import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import MainContainer from './containers/MainContainer'
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './components/Home'

function App() {
  return (
    <div className="App">
       <Router>
       <Route exact path='/' component={Home}/>
        <NavBar />
       </Router>
    </div>
  );
}

export default App;
