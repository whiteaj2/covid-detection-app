import React, { Component } from 'react'
import Cookies from "universal-cookie";

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
                            <h2>Testing Results</h2><br/><br/>
                            <h6 class="card-title">Login First If you did not</h6>
                            <a href="/Login" class="btn btn-custom" role="button">Login</a>
                            <br/><br/><br/>
                            <h6 class="card-title">Share your results</h6>
                            <a href="/Result" class="btn btn-custom" role="button">Results</a>
                    </div>
            </div>
            </div>
            </form>
        )
    }
}

export default TestResult
