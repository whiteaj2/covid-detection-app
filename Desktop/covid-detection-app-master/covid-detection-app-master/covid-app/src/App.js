import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import Test from './components/Test';

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
    <nav className="navbar navbar-expand-lg navbar-light fixed-top "  >
    <a class="navbar-brand" href={"/map"}>COVID DETECTION</a>

    
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  

        <div className="container">
          
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to={"/Home"}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to={"/Login"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Signup"}>Sign up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Test"}>Test</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/About"}>About</Link>
              </li>
            
            </ul>
          </div>
        </div>
      </nav>
      

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/Login" component={Login} />
            <Route path="/Signup" component={Signup} />
            <Route path="/Test" component={Test} />
            <Route path="/About" component={About} />
            <Route path="/Home" component={Home} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
