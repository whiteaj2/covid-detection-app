import React, { Component } from 'react'
import Cookies from "universal-cookie";
import {Redirect} from "react-router-dom";



const cookies = new Cookies();

export class Result extends Component {
    constructor(props) {
        super(props)
    }

    state={
        test_res:"",
        authenticatedEmail: cookies.get("authenticatedEmail"),
        redirect:false,
        checking:false

    }
    
    preRender = () => {
        if(this.state.authenticatedEmail == null) {
            return <Redirect to="/Login"/>;
        }
    }

    renderRedirect = () => {
        if(this.state.checking) {
            return <Redirect to="/Map" />;
        }
    };


    handleRes = (event) => {
        event.preventDefault();
        fetch("/handleRes", {method: "POST", body: JSON.stringify({test_res: this.state.test_res,
                                                                    authenticatedEmail: this.state.authenticatedEmail
                                                                })})
                                                                .then(res => {return res.json()})

                                                                this.setState({checking:true})

                                                               

    }
//updatetest_res=(event)=>{this.setState({test_res:event.target.value})};


updatetest_res = (event) => {this.setState({test_res: event.target.value})};
    render() {
        return (
            
            <form>
                {this.preRender()}
                {this.renderRedirect()}
            <div>
                <div class="card">
                    <div ><br/><br/><br/><br/>
                            <h2>Share your Results</h2><br/><br/>    
                            <div className="screen">
                    <p>What results did you get for COVID-19 from the testing site?</p>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="screenOne" id="positive" value="positive" onChange={this.updatetest_res}/>
                        <label className="form-check-label" for="positive">
                            Positive
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="screenOne" id="negative" value="negative" onChange={this.updatetest_res}/>
                        <label className="form-check-label" for="negative">
                            Negative
                        </label>
                    </div>
                    <div className="login-buttons">
                        <button type="submit" className="btn btn-custom" onClick={this.handleRes}>Submit</button><br/>
                </div>
                            </div>
                            <br/>
            </div>
            </div>
            </div>
            </form>
        )
    }
}

export default Result