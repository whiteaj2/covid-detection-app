import React, { Component } from 'react'

export class Signup extends Component {
    signup(){
        alert("Signup confirmed")
    }
    render() {
        return (<form><br/><br/><br/>
            <h4>Sign Up</h4>
            <div className="form-group">
                <div className="center">
                <br/>
                <center>

               <label> First name: <input type="text" className="form"  placeholder="John"/></label> <br/><br/>
               <label> Last name: <input type="text" className="form" placeholder="Smith" /> </label><br/><br/>
               <label> Email: <input type="email" className="form" placeholder="abc@xyz.com" /> </label><br/><br/>
               <label> Confirm email: <input type="email" className="form" placeholder="abc@xyz.com" /></label> <br/><br/>
               <label> Password: <input type="password" className="form" placeholder="Password goes here"/></label> <br/><br/>
                
                </center>

                </div>

                <button type="submit" className="btn btn-success" 
                    onClick={()=>this.signup()}>
                        Submit</button>
            </div>
            </form>
        )
    }
}

export default Signup
