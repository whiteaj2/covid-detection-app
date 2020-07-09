import React, { Component } from 'react'

export class Signup extends Component {
    signup(){
        alert("Signup confirmed")
    }
    render() {
        return (<form><br/><br/><br/>
            <div className="card card-signup">
                <h2>Sign Up</h2>
                <div className="form-group">
                    <div className="center">
                    <br/>
                    <center>
                        <label><input type="text" className="form-control"  placeholder="First Name" size="40"/></label> <br/>
                        <label><input type="text" className="form-control" placeholder="Last Name" size="40" /> </label><br/>
                        <label><input type="email" className="form-control" placeholder="Email Address" size="40"/> </label><br/>
                        <label><input type="email" className="form-control" placeholder="Confirm Email Address" size="40"/></label> <br/>
                        <label><input type="password" className="form-control" placeholder="Password" size="40"/></label> <br/>
                    </center>

                    </div>

                    <button type="submit" className="btn btn-custom" 
                        onClick={()=>this.signup()}>
                            Submit</button>
                </div>
            </div>
            </form>
        )
    }
}

export default Signup
