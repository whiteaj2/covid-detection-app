import React, { Component } from 'react'

export class Login extends Component {
    render() {
        return (
            <form><br/><br/><br/>
                <div class="card card-login">
                    <h2>Log In</h2><br/>
                    <div className="form-group">
                    <label>
                        <input type="email" className="form-control" placeholder="Email address" size="30"/>
                    </label>
                    </div>

                    <div className="form-group">
                    <label>
                        <input type="password" className="form-control" placeholder="Password" size="30"/>
                    </label>
                    </div>


                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <div className="login-buttons">
                        <button type="submit" className="btn btn-custom">Log In</button><br/>
                        <p><a href="#">Forgot your password?</a></p>
                    </div>
                </div> 
            </form>
        )
    }
}

export default Login
