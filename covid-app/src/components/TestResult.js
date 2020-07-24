import React, { Component } from 'react'
import Cookies from "universal-cookie";
import { Link } from 'react-router-dom';

const cookies = new Cookies();

export class TestResult extends Component {
    constructor(props) {
        super(props)
    }

    state={
        authenticatedEmail: cookies.get("authenticatedEmail")

    }


    render() {
        return (
            <form>
            <div>
                <div class="card">
                    <div class="card-body"><br/><br/><br/>
                            <h2>COVID RESULTS</h2><br/><br/>
                            <br/><br/>
                            <h6 class="card-title">Share your results</h6>
                            <div className="login-buttons">
                            <Link to="/Result" className="btn btn-custom" >Results</Link>                   
                             </div>  <br/><br/><br/><br/><br/>
                    </div>
            </div>
            </div>
            </form>
        )
    }
}

export default TestResult
