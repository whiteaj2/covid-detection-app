import React, { Component } from 'react'

export class Test extends Component {
    render() {
        return (
            <form><br/><br/><br/>
            <h2 id="screen-title">FIND A TESTING CENTER</h2><br/>
            <p id="screen-info">Fill out our form to find which COVID-19 testing centers you qualify for in Marion County.</p>
            <div class="card card-screen">
                

                <h4>Patient Screening</h4>
                <div className="screen">
                    <p>Are you over the age of 18?</p>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="screenOne" id="yes" value="yes"/>
                        <label className="form-check-label" for="yes">
                            Yes
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="screenOne" id="no" value="no"/>
                        <label className="form-check-label" for="no">
                            No
                        </label>
                    </div>

                    <p>Are you over the age of 65?</p>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="screenTwo" id="yes" value="yes"/>
                        <label className="form-check-label" for="yes">
                            Yes
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="screenTwo" id="no" value="no"/>
                        <label className="form-check-label" for="no">
                            No
                        </label>
                    </div>
                
                    <p>Have you been instructed to get tested by your state, health department or medical professional?</p>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="screenThree" id="yes" value="yes"/>
                        <label className="form-check-label" for="yes">
                            Yes
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="screenThree" id="no" value="no"/>
                        <label className="form-check-label" for="no">
                            No
                        </label>
                    </div>

                    <p>Have you had close contact, within 6 feet of a COVID-19 infected 
                    person for at least 15 minutes starting from 48 hours before the onset of the infected person’s illness?</p>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="screenFour" id="yes" value="yes"/>
                        <label className="form-check-label" for="yes">
                            Yes
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="screenFour" id="no" value="no"/>
                        <label className="form-check-label" for="no">
                            No
                        </label>
                    </div>

                    <p>Have you recently developed any COVID-19 symptoms? Select all that apply.</p>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="screenCheck1"/>
                        <label class="form-check-label" for="screenCheck1">
                            Fever
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="screenCheck2"/>
                        <label class="form-check-label" for="screenCheck2">
                            Cough
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="screenCheck3"/>
                        <label class="form-check-label" for="screenCheck3">
                            Shortness of breath or difficulty breathing
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="screenCheck4"/>
                        <label class="form-check-label" for="screenCheck4">
                            Chills
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="screenCheck5"/>
                        <label class="form-check-label" for="screenCheck5">
                            Repeated shaking with chills 
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="screenCheck6"/>
                        <label class="form-check-label" for="screenCheck6">
                            Muscle pain
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="screenCheck7"/>
                        <label class="form-check-label" for="screenCheck7">
                            Headache
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="screenCheck8"/>
                        <label class="form-check-label" for="screenCheck8">
                            Sore throat
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="screenCheck9"/>
                        <label class="form-check-label" for="screenCheck9">
                            New loss of taste or smell
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="screenCheck10"/>
                        <label class="form-check-label" for="screenCheck10">
                            Vomiting
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="screenCheck11"/>
                        <label class="form-check-label" for="screenCheck11">
                            Diarrhea
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="screenCheck12"/>
                        <label class="form-check-label" for="screenCheck12">
                            Sore Throat
                        </label>
                    </div>

                    <p>Are you part of a high-risk group due to underlying conditions? Select all that apply.</p>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="screenCheck13"/>
                        <label class="form-check-label" for="screenCheck13">
                            Asthma or chronic lung disease
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="screenCheck14"/>
                        <label class="form-check-label" for="screenCheck14">
                            Diabetes
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="screenCheck15"/>
                        <label class="form-check-label" for="screenCheck15">
                            Extreme obesity
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="screenCheck16"/>
                        <label class="form-check-label" for="screenCheck16">
                            Cirrhosis of the liver
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="screenCheck17"/>
                        <label class="form-check-label" for="screenCheck17">
                            Serious heart condition, such as congestive heart failure
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="screenCheck18"/>
                        <label class="form-check-label" for="screenCheck18">
                            Diseases or conditions that make it harder to cough
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="screenCheck19"/>
                        <label class="form-check-label" for="screenCheck19">
                            Kidney failure or end stage renal disease 
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="screenCheck20"/>
                        <label class="form-check-label" for="screenCheck20">
                            Conditions that result in a weakened immune system, including cancer treatment
                        </label>
                    </div>

                    <p>Are you pregnant?</p>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="screenFive" id="yes" value="yes"/>
                        <label className="form-check-label" for="yes">
                            Yes
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="screenFive" id="no" value="no"/>
                        <label className="form-check-label" for="no">
                            No
                        </label>
                    </div>

                    <p>Are you an essential worker or healthcare worker?</p>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="screenSix" id="yes" value="yes"/>
                        <label className="form-check-label" for="yes">
                            Yes
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="screenSix" id="no" value="no"/>
                        <label className="form-check-label" for="no">
                            No
                        </label>
                    </div>

                </div>

                <hr></hr>

                <h4 id="address-title">Patient Mailing Address</h4>
                <div class="address">
                    <div class="form-group">
                        <label for="inputAddress"></label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="Address Line 1"/>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress2"></label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Address Line 2"/>
                    </div>
                
                    <div class="form-row">
                        <div class="col-7">
                        <input type="text" class="form-control" placeholder="City"/>
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" placeholder="State"/>
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" placeholder="Zip"/>
                        </div>
                    </div>
                </div><br></br>

                <hr></hr>

                <h4 id="address-title">Last Known Locations</h4>
                <p id="screen-p">We rely on your voluntary participation to map potential COVID-19 outbreaks in the Indianapolis area.
                Please fill out your last three known public locations. Your data will remain completely anonymous. We appreciate your help!
                </p>
                <div class="address">
                    <div class="form-group">
                        <label id="loc-label" for="inputLocation">Location One:</label>
                        <input type="text" class="form-control" id="inputLocation" placeholder="Location Name"/>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress"></label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="Address Line 1"/>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress2"></label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Address Line 2"/>
                    </div>
                
                    <div class="form-row">
                        <div class="col-7">
                        <input type="text" class="form-control" placeholder="City"/>
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" placeholder="State"/>
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" placeholder="Zip"/>
                        </div>
                    </div>
                </div> 

                <div class="address">
                    <div class="form-group">
                        <label id="loc-label" for="inputLocation">Location Two:</label>
                        <input type="text" class="form-control" id="inputLocation" placeholder="Location Name"/>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress"></label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="Address Line 1"/>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress2"></label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Address Line 2"/>
                    </div>
                
                    <div class="form-row">
                        <div class="col-7">
                        <input type="text" class="form-control" placeholder="City"/>
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" placeholder="State"/>
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" placeholder="Zip"/>
                        </div>
                    </div>
                </div> 

                <div class="address">
                    <div class="form-group">
                        <label id ="loc-label" for="inputLocation">Location Three:</label>
                        <input type="text" class="form-control" id="inputLocation" placeholder="Location Name"/>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress"></label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="Address Line 1"/>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress2"></label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Address Line 2"/>
                    </div>
                
                    <div class="form-row">
                        <div class="col-7">
                        <input type="text" class="form-control" placeholder="City"/>
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" placeholder="State"/>
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" placeholder="Zip"/>
                        </div>
                    </div>
                </div> 


                <div className="login-buttons">
                        <button type="submit" className="btn btn-custom">Submit</button><br/>
                </div>

            </div>
        </form>
        )
    }
}

export default Test
