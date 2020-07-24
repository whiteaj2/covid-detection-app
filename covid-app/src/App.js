import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import Main from './components/Map';
import Test from './components/Test';
import TestResult from './components/TestResult';
import Result from './components/Result';
import logo from '../src/images/logo-2.png';
import './App.css';

function handleSearch () {
  fetch("/handleSearch", {method: "POST"}).then(res => {return res.json();}).then(data => console.log(data));
}

function App() {

  return (
    <Router>
    <div className="App">
    <nav className="navbar navbar-expand-lg navbar-light fixed-top "  >
      <a class="navbar-brand font-weight-bold" href={"/map"}>
        <img src={logo} height="35" alt="logo" /> EVERYTHING COVID-19
      </a>

    
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button  class="btn btn-outline-success my-2 my-sm-0"  type="submit" onClick={handleSearch}>Search</button>
  

        <div className="container">
          
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link " to={"/Map"}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Home"}>COVID-19 Map</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Test"}>Find a Test Site</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to={"/Login"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Signup"}>Sign up</Link>
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
            <Route path="/Map" component={Main} />
            <Route path="/TestResult" component={TestResult} />
            <Route path="/Result" component={Result} />
          </Switch>
        </div>
      </div>

      <div class="footer fixed-bottom">&copy; EVERYTHING COVID-19 2020</div>
    </div></Router>
  );
}

export default App;
