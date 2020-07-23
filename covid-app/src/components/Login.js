import React, { Component } from 'react';
import Cookies from "universal-cookie";
import {Redirect} from "react-router-dom";

const cookies = new Cookies();

export class Login extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        email: "",
        password: "",
        authenticatedEmail: cookies.get("authenticatedEmail"),
        redirect: false
    }

    preRender = () => {
        if(this.state.authenticatedEmail != null) {
            return <h2>You're already logged in!</h2>
        }
    }

    renderRedirect = () => {
        if(this.state.redirect) {
            return <Redirect to="/Map" />;
        }
    };

    updateEmail = (event) => {this.setState({email: event.target.value})};
    updatePassword = (event) => {this.setState({password: event.target.value})};

    handleSubmit = (event) => {
        event.preventDefault();
        fetch("/handleSubmit", {method: "POST", body: JSON.stringify({email: this.state.email,
                                                                      password: this.state.password})})
                                                                    .then(res => {return res.json()})
                                                                    .then(jsonData => {
                                                                        if (jsonData.flag == 1) {
                                                                            alert("Email not linked with an account")
                                                                        } else if (jsonData.flag == 2) {
                                                                            alert("Incorrect password")
                                                                        } else {
                                                                            cookies.set("authenticatedEmail", this.state.email, {path: "/",
                                                                                                                                 maxAge: 300})
                                                                            this.setState({redirect: true});
                                                                            alert("Successful Login");
                                                                        }
                                                                    });
    };

    render() {
        return (
            <form><br/><br/><br/>
                {this.preRender()}
                {this.renderRedirect()}
                <div class="card card-login">
                    <h2>Log In</h2><br/>
                    <div className="form-group">
                    <label>
                        <input type="email" className="form-control" placeholder="Email address" size="30" onChange={this.updateEmail}/>
                    </label>
                    </div>

                    <div className="form-group">
                    <label>
                        <input type="password" className="form-control" placeholder="Password" size="30" onChange={this.updatePassword}/>
                    </label>
                    </div>
                    
                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>
                    <div className="login-buttons">
                        <button type="submit" className="btn btn-custom" onClick={this.handleSubmit}>Log In</button><br/>
                    </div>
                </div> 
            </form>
        )
    }
}

export default Login
