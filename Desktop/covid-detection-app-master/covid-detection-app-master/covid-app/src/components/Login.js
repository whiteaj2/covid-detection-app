import React, { Component } from 'react'

export class Login extends Component {
    render() {
        return (
            <form><br/><br/><br/>
                <h4>Log In</h4><br/>
                <div className="form-group">
                <label>
                    Email: <input type="email" className="form-control" placeholder="abc@xyz.com"/>
                </label>
                </div>

                <div className="form-group">
                <label>
                    Password: <input type="password" className="form-control" placeholder="Password goes here"/>
                </label>
                </div>


                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-success">Submit</button>
                <button type="submit" className="btn btn-warning">Forgot <a href="#">Password?</a></button>
                
                
            </form>


        )
    }
}

export default Login
