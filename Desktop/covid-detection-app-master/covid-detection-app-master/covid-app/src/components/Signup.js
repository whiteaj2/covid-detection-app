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
            <h4>Sign Up</h4>
            <div className="form-group">
                <div className="center">
                <br/>
                <center>

               <label> First name: <input type="text" className="form"  placeholder="John" onChange={this.updateFirstName} /></label> <br/><br/>
               <label> Last name: <input type="text" className="form" placeholder="Smith" onChange={this.updateLastName} /> </label><br/><br/>
               <label> Email: <input type="email" className="form" placeholder="abc@xyz.com" onChange={this.updateEmail} /> </label><br/><br/>
               <label> Confirm email: <input type="email" className="form" placeholder="abc@xyz.com" onChange={this.updateConfirmEmail} /></label> <br/><br/>
               <label> Password: <input type="password" className="form" placeholder="Password goes here" onChange={this.updatePassword}/></label> <br/><br/>
               <label> Username: <input type="text" className="form" placeholder="username" onChange={this.updateUsername} /></label> <br/><br/> 
                </center>

                </div>

                <button type="submit" className="btn btn-success" 
                    onClick={this.signup}>
                        Submit</button>
            </div>
            </form>
        )
    }
}

export default Signup
