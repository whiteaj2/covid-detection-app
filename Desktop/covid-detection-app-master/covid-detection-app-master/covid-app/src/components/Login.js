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

    handleSubmit = () => {
        fetch("/handleSubmit", {method: "POST", body: JSON.stringify({email: this.state.email, password: this.state.password}) }).then(res => {return res.json()});
    };

    render() {
        return (
            <form><br/><br/><br/>
                <h4>Log In</h4><br/>
                <div className="form-group">
                <label>
                    Email: <input type="email" className="form-control" placeholder="abc@xyz.com" onChange={this.updateEmail}/>
                </label>
                </div>

                <div className="form-group">
                <label>
                    Password: <input type="password" className="form-control" placeholder="Password goes here" onChange={this.updatePassword}/>
                </label>
                </div>


                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
                <button type="submit" className="btn btn-warning">Forgot <a href="#">Password?</a></button>
                
                
            </form>


        )
    }
}

export default Login
