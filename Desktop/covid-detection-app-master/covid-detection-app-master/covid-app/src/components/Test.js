import React, { Component } from 'react'

export class Test extends Component {
    render() {
        return (
            <form><br/><br/><br/>
            <h2 id="screen-title">Pre-Screening Form</h2><br/>
            <div class="card card-screen">
                

                <h4>Patient Screening</h4>
                <div className="screen">
                    <p>Are you a Parent/Guardian registering on behalf of a minor?</p>
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
                
                    <p>Were you or your minor/dependent advised to get tested for COVID-19 by a public health official?</p>
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

                    <p>Have you or your minor/dependent had close contact, within 6 feet of a COVID-19 infected 
                    person for at least 15 minutes starting from 48 hours before the onset of the infected person’s illness?</p>
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

                    <p>Do you or your minor/dependent work or live in a group setting (this includes Long Term Care Facilities)?</p>
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

                    <p>Have you or your minor/dependent recently developed any COVID-19 symptoms? Check those that apply.</p>
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

                    <p>Are you or your minor/dependent over the age of 65, part of a high-risk group due to underlying conditions 
                    (such as diabetes, high blood pressure, obesity, etc), or part of a high risk minority population?</p>
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

                    <p>Are you or your minor/dependent employed?</p>
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

                    <p>Do you or your minor/dependent smoke, chew, and/or vape tobacco?</p>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="screenSeven" id="no" value="no"/>
                        <label className="form-check-label" for="no">
                            Not at all
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="screenSeven" id="some" value="some"/>
                        <label className="form-check-label" for="some">
                            Some days
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="screenSeven" id="everyday" value="everyday"/>
                        <label className="form-check-label" for="everyday">
                            Every day
                        </label>
                    </div>

                    <p>Race:</p>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="screenEight" id="asian" value="asian"/>
                        <label className="form-check-label" for="asian">
                            Asian
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="screenEight" id="black" value="black"/>
                        <label className="form-check-label" for="black">
                            Black or African American
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="screenEight" id="native" value="native"/>
                        <label className="form-check-label" for="native">
                            American Indian or Alaska Native
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="screenEight" id="pacific" value="pacific"/>
                        <label className="form-check-label" for="pacific">
                            Native Hawaiian or Other Pacific Islander
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="screenEight" id="white" value="white"/>
                        <label className="form-check-label" for="white">
                            White
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="screenEight" id="multi" value="multi"/>
                        <label className="form-check-label" for="multi">
                            Multiracial
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="screenEight" id="other" value="other"/>
                        <label className="form-check-label" for="other">
                            Other
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="screenEight" id="unknown" value="unknown"/>
                        <label className="form-check-label" for="unknown">
                            Unknown
                        </label>
                    </div>


                    <p>Ethnicity</p>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="screenNine" id="hispanic" value="hispanic"/>
                        <label className="form-check-label" for="hispanic">
                            Hispanic or Latino
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="screenNine" id="not" value="not"/>
                        <label className="form-check-label" for="not">
                            Not Hispanic or Latino
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="screenNine" id="unknown" value="unknown"/>
                        <label className="form-check-label" for="unknown">
                            Unknown
                        </label>
                    </div>

                    <p>Do you or your minor/dependent have current health insurance?</p>
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

                <h4 id="address-title">Mailing Address</h4>
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

                    <div className="login-buttons">
                        <button type="submit" className="btn btn-custom">Submit</button><br/>
                    </div>
                </div> 
            </div>
        </form>
        )
    }
}

export default Test
