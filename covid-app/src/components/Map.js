import React, { Component } from 'react'
import image from "../images/icons8-find-hospital-96.png"
import one from '../images/One 2.png';
import two from '../images/Two 2.png';
import three from '../images/Three 2.png';
import Cookies from "universal-cookie";
import { Link } from 'react-router-dom';

const cookies = new Cookies();


export class Main extends Component {
    constructor(props) {
        super(props)
    }


    state = {
        authenticatedEmail: cookies.get("authenticatedEmail")
      };


      handleRes = (event) => {
        event.preventDefault();

      }

    render() {
        return (

        <div class="wrapper">
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-3 font-weight-bold">Everything COVID-19</h1>
                    <p class="lead">Find a COVID-19 testing center you qualify for and contribute to our visualization map tracking the pandemic in Indianapolis. </p>
                </div>
            </div>

            <div class="card-deck">
                <div class="card">
                    <img class="card-pic" src={one} width="150" alt="One"/>
                    <div class="card-body"><br/>
                            <h5 class="card-title">Login or create your account</h5><br/><br/>
                            <div className="login-buttons">
                            <Link to="/Signup" className="btn btn-custom" >Signup</Link>                   
                             </div>                    </div>
                </div>
                <div class="card">
                    <img class="card-pic" src={two} width="150" alt="Two"/>
                    <div class="card-body">
                        <h5 class="card-title">Fill out our quick screen to find your testing center</h5>
                        <br/><br/>
                        <div className="login-buttons">
                            <Link to="/Test" className="btn btn-custom" >Testing Site</Link>                   
                             </div>                    </div>
                </div>
                <div class="card">
                    <img class="card-pic" src={three} width="150" alt="Three"/>
                    <div class="card-body">
                        <h5 class="card-title">Let us know how your test turned out and help us track the pandemic in Indianpolis</h5>
                        
                        
                        <div className="login-buttons">
                            <Link to="/TestResult" className="btn btn-custom" >Test Results</Link>                   
                             </div>
                    </div>
                </div>
            </div>

        </div>
    
        )
    }
};
export default Main