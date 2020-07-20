import React, { Component } from 'react'

export class Login extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        email: "",
        password: ""
    }

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
                                                                            alert("Successful Login")
                                                                        }
                                                                    });
    };

    render() {
        return (
            <form><br/><br/><br/>
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
                        <p>Don't have an account? <a href="signup">Sign Up</a></p>
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
