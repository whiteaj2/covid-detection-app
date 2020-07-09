import React, { Component } from 'react'

export class Signup extends Component {
  constructor(props) {
    super(props)
  }

    state = {
      fname: "",
      lname: "",
      email: "",
      confirmEmail: "",
      password: "",
      uname: ""
    }
    signup = () => {
        fetch("/handleSignup", {method: "POST", body: JSON.stringify({email: this.state.email,
                                                                      password: this.state.password,
                                                                      confirmEmail: this.state.confirmEmail,
                                                                      fname: this.state.fname,
                                                                      lname: this.state.lname,
                                                                      uname: this.state.uname})}).then(res => {return res.json()});
    }

    updateFirstName = (event) => {this.setState({fname: event.target.value})};
    updateLastName = (event) => {this.setState({lname: event.target.value})};
    updateEmail = (event) => {this.setState({email: event.target.value})};
    updateConfirmEmail = (event) => {this.setState({confirmEmail: event.target.value})};
    updatePassword = (event) => {this.setState({password: event.target.value})};
    updateUsername = (event) => {this.setState({uname: event.target.value})};

    render() {
        return (<form><br/><br/><br/>
            <div className="card card-signup">
                <h2>Sign Up</h2>
                <div className="form-group">
                    <div className="center">
                    <br/>
                    <center>
                        <label><input type="text" className="form-control"  placeholder="First Name" size="40" onChange={this.updateFirstName}/></label> <br/>
                        <label><input type="text" className="form-control" placeholder="Last Name" size="40" onChange={this.updateLastName}/> </label><br/>
                        <label><input type="email" className="form-control" placeholder="Email Address" size="40" onChange={this.updateEmail}/> </label><br/>
                        <label><input type="email" className="form-control" placeholder="Confirm Email Address" size="40" onChange={this.updateConfirmEmail}/></label> <br/>
                         <label><input type="text" className="form-control" placeholder="Username" size="40" onChange={this.updateUsername}/></label> <br/>
                        <label><input type="password" className="form-control" placeholder="Password" size="40" onChange={this.updatePassword}/></label> <br/>
                    </center>
                    </div>

                    <button type="submit" className="btn btn-custom" 
                        onClick={this.signup}>
                            Submit</button>
                </div>
            </div>
            </form>
        )
    }
}

export default Signup
