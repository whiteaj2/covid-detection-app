import React, { Component } from 'react';
import Cookies from "universal-cookie";
import Geocode from "react-geocode";

const cookies = new Cookies();
Geocode.setApiKey("AIzaSyBc8EJ3AVtUvsPpYTj3paPRTRT44ILmrqI");

export class Test extends Component {
    constructor(props) {
        super(props)
    }


    
    state = {
        age_18:"",
        age_65:"",
        official_consent:"",
        close_contact:"",
        fever:false,
        cough:false,
        breathing:false,
        chills:false,
        shaking_chills:false,
        muscle_pain:false,
        headache:false,
        sore_throat:false,
        taste_smell:false,
        vomiting:false,
        diarrhea:false,
        asthma_lung:false,
        diabetes:false,
        obesity:false,
        cirrhosis:false,
        heart_condition:false,
        harder_cough_disease:false,
        kidney_renal_disease:false,
        weakened_immune_system:false,
        pregnant:"",
        essential_healthcare_worker:"",
        address1:"",
        address2:"",
        city:"",
        state:"",
        zip:"",
        loc_1_name:"",
        loc_1_address1:"",
        loc_1_address2:"",
        loc_1_city:"",
        loc_1_state:"",
        loc_1_zip:"",
        loc_2_name:"",
        loc_2_address1:"",
        loc_2_address2:"",
        loc_2_city:"",
        loc_2_state:"",
        loc_2_zip:"",
        loc_3_name:"",
        loc_3_address1:"",
        loc_3_address2:"",
        loc_3_city:"",
        loc_3_state:"",
        loc_3_zip:"",
        score:"",
        lat_1: 0,
        long_1: 0,
        lat_2: 0,
        long_2: 0,
        lat_3: 0,
        long_3: 0,
        authenticatedEmail: cookies.get("authenticatedEmail"),
        queryResults: null
    }

    preHandle = (event) => {
        let addressOne = this.state.loc_1_address1;
        if(this.state.loc_1_address2 != "") {
            addressOne = addressOne + " " + this.state.loc_1_address2;
        }
        addressOne = addressOne + " " + this.state.loc_1_city + " " + this.state.loc_1_state + " " + this.state.loc_1_zip;

        if(this.state.loc_1_address1 == ""
            || this.state.loc_1_city == ""
            || this.state.loc_1_state == ""
            || this.state.loc_1_zip == "") {
            addressOne = "";
        }
        //-----------------------------------
        let addressTwo = this.state.loc_2_address1;
        if(this.state.loc_2_address2 != "") {
            addressTwo = addressTwo + " " + this.state.loc_2_address2;
        }
        addressTwo = addressTwo + " " + this.state.loc_2_city + " " + this.state.loc_2_state + " " + this.state.loc_2_zip;

        if(this.state.loc_2_address1 == ""
            || this.state.loc_2_city == ""
            || this.state.loc_2_state == ""
            || this.state.loc_2_zip == "") {
            addressTwo = "";
        }
        //------------------------------------
        let addressThree = this.state.loc_3_address1;
        if(this.state.loc_3_address2 != "") {
            addressThree = addressThree + " " + this.state.loc_3_address2;
        }
        addressThree = addressThree + " " + this.state.loc_3_city + " " + this.state.loc_3_state + " " + this.state.loc_3_zip;

        if(this.state.loc_3_address1 == ""
            || this.state.loc_3_city == ""
            || this.state.loc_3_state == ""
            || this.state.loc_3_zip == "") {
            addressThree = "";
        }


        Geocode.fromAddress(addressOne).then(res => {this.setState({lat_1: res.results[0].geometry.location.lat,
                                                                    long_1: res.results[0].geometry.location.lng})
                                                                    },
                                             error => {});

        Geocode.fromAddress(addressTwo).then(res => {this.setState({lat_2: res.results[0].geometry.location.lat,
                                                                    long_2: res.results[0].geometry.location.lng})
                                                                    },
                                             error => {});

        Geocode.fromAddress(addressThree).then(res => {this.setState({lat_3: res.results[0].geometry.location.lat,
                                                                    long_3: res.results[0].geometry.location.lng})
                                                                    },
                                             error => {});
    };

    handleTest = (event) => {
        let checkedBoxes = document.querySelectorAll('input[name=c]:checked');
        let totalLength=checkedBoxes.length;

        alert('You have '+totalLength+' out of 11 symptoms');
        this.setState({ score: totalLength });

        fetch("/handleTest", {method: "POST", body: JSON.stringify({age_18: this.state.age_18,
                                                                    age_65: this.state.age_65,
                                                                    close_contact: this.state.close_contact,
                                                                    official_consent: this.state.official_consent,
                                                                    fever: this.state.fever,
                                                                    cough: this.state.cough ,
                                                                    breathing: this.state.breathing ,
                                                                    chills: this.state.chills ,
                                                                    shaking_chills: this.state.shaking_chills ,
                                                                    muscle_pain: this.state.muscle_pain ,
                                                                    headache: this.state.headache ,
                                                                    sore_throat: this.state.sore_throat ,
                                                                    taste_smell: this.state.taste_smell ,
                                                                    vomiting: this.state.vomiting ,
                                                                    diarrhea: this.state.diarrhea ,
                                                                    asthma_lung: this.state.asthma_lung ,
                                                                    diabetes: this.state.diabetes ,
                                                                    obesity: this.state.obesity ,
                                                                    cirrhosis: this.state.cirrhosis ,
                                                                    heart_condition: this.state.heart_condition ,
                                                                    harder_cough_disease: this.state.harder_cough_disease ,
                                                                    kidney_renal_disease: this.state.kidney_renal_disease ,
                                                                    weakened_immune_system: this.state.weakened_immune_system ,
                                                                    pregnant: this.state.pregnant ,
                                                                    essential_healthcare_worker: this.state.essential_healthcare_worker,
                                                                    lat_1: this.state.lat_1,
                                                                    long_1: this.state.long_1,
                                                                    lat_2: this.state.lat_2,
                                                                    long_2: this.state.long_2,
                                                                    lat_3: this.state.lat_3,
                                                                    long_3: this.state.long_3,
                                                                    score: totalLength,
                                                                    authenticatedEmail: this.state.authenticatedEmail
                                                                    
                                                                    })})
                                                        .then(res => {return res.json()}).then(res => {

        let highRisk = (this.state.asthma_lung ||
                       this.state.diabetes ||
                       this.state.obesity ||
                       this.state.cirrhosis ||
                       this.state.heart_condition ||
                       this.state.harder_cough_disease ||
                       this.state.kidney_renal_disease ||
                       this.state.weakened_immune_system) ? 1 : 0;
        let symptomatic = totalLength > 0 ? 1 : 0;
        let over18 = this.state.age_18 == "yes" ? 1 : 0;
        let over65 = this.state.age_65 == "yes" ? 1 : 0;
        let exposure = this.state.close_contact == "yes" ? 1 : 0;
        let doctorsNote = this.state.official_consent == "yes" ? 1 : 0;
        let pregnant = this.state.pregnant == "yes" ? 1 : 0;
        let essentialWorker = this.state.essential_healthcare_worker == "yes" ? 1 : 0;

        fetch("/getTestingSites", {method: "POST", body: JSON.stringify({highRisk: highRisk,
                                                                         symptomatic: symptomatic,
                                                                         over18: over18,
                                                                         over65: over65,
                                                                         exposure: exposure,
                                                                         doctorsNote: doctorsNote,
                                                                         pregnant: pregnant,
                                                                         essentialWorker: essentialWorker})})
        .then(returnData => {return returnData.json()})
        .then(returnedJson => {
            this.setState({queryResults: returnedJson})
        });

        });
                                                        

                                                        }

    handleAllTest = (event) => {
        event.preventDefault();
        this.preHandle(event);
        this.handleTest(event);
    }
                                                         



    updateAge_18 = (event) => {this.setState({age_18: event.target.value})};
    updateAge_65 = (event) => {this.setState({age_65: event.target.value})};
    updateClose_contact = (event) => {this.setState({close_contact: event.target.value})}
    updateOfficial_consent = (event) => {this.setState({official_consent: event.target.value})};
    
    updateFever = () => {this.setState(prevState => ({fever: !prevState.fever}));};
    updateCough = () => {this.setState(prevState => ({cough: !prevState.cough}));};
    updateBreathing = () => {this.setState(prevState => ({breathing: !prevState.breathing}));};
    updateChills = () => {this.setState(prevState => ({chills: !prevState.chills}));};
    updateShaking_chills = () => {this.setState(prevState => ({shaking_chills: !prevState.shaking_chills}));};
    updateMuscle_pain = () => {this.setState(prevState => ({muscle_pain: !prevState.muscle_pain}));};
    updateHeadache = () => {this.setState(prevState => ({headache: !prevState.headache}));};
    updateSore_throat = () => {this.setState(prevState => ({sore_throat: !prevState.sore_throat}));};
    updateTaste_smell = () => {this.setState(prevState => ({taste_smell: !prevState.taste_smell}));};
    updateVomiting = () => {this.setState(prevState => ({vomiting: !prevState.vomiting}));};
    updateDiarrhea = () => {this.setState(prevState => ({diarrhea: !prevState.diarrhea}));};
    
    updateAsthma_lung = () => {this.setState(prevState => ({asthma_lung: !prevState.asthma_lung}));};
    updateDiabetes = () => {this.setState(prevState => ({diabetes: !prevState.diabetes}));};
    updateObesity = () => {this.setState(prevState => ({obesity: !prevState.obesity}));};
    updateCirrhosis = () => {this.setState(prevState => ({cirrhosis: !prevState.cirrhosis}));};
    updateHeart_condition = () => {this.setState(prevState => ({heart_condition: !prevState.heart_condition}));};
    updateHarder_cough_disease = () => {this.setState(prevState => ({harder_cough_disease: !prevState.harder_cough_disease}));};
    updateKidney_renal_disease = () => {this.setState(prevState => ({kidney_renal_disease: !prevState.kidney_renal_disease}));};
    updateWeakened_immune_system = () => {this.setState(prevState => ({weakened_immune_system: !prevState.weakened_immune_system}));};
    
    updatePregnant = (event) => {this.setState({pregnant: event.target.value})};
    updateEssential_healthcare_worker = (event) => {this.setState({essential_healthcare_worker: event.target.value})};
    updateAddress1 = (event) => {this.setState({address1: event.target.value})};
    updateAddress2 = (event) => {this.setState({address2: event.target.value})};
    updateCity = (event) => {this.setState({city: event.target.value})};
    updateState = (event) => {this.setState({state: event.target.value})};
    updateZip = (event) => {this.setState({zip: event.target.value})};
    updateLoc_1_name = (event) => {this.setState({loc_1_name: event.target.value})};
    updateLoc_1_address1 = (event) => {this.setState({loc_1_address1: event.target.value})};
    updateLoc_1_address2 = (event) => {this.setState({loc_1_address2: event.target.value})};
    updateLoc_1_city = (event) => {this.setState({loc_1_city: event.target.value})};
    updateLoc_1_state = (event) => {this.setState({loc_1_state: event.target.value})};
    updateLoc_1_zip = (event) => {this.setState({loc_1_zip: event.target.value})};
    updateLoc_2_name = (event) => {this.setState({loc_2_name: event.target.value})};
    updateLoc_2_address1 = (event) => {this.setState({loc_2_address1: event.target.value})};
    updateLoc_2_address2 = (event) => {this.setState({loc_2_address2: event.target.value})};
    updateLoc_2_city = (event) => {this.setState({loc_2_city: event.target.value})};
    updateLoc_2_state = (event) => {this.setState({loc_2_state: event.target.value})};
    updateLoc_2_zip = (event) => {this.setState({loc_2_zip: event.target.value})};
    updateLoc_3_name = (event) => {this.setState({loc_3_name: event.target.value})};
    updateLoc_3_address1 = (event) => {this.setState({loc_3_address1: event.target.value})};
    updateLoc_3_address2 = (event) => {this.setState({loc_3_address2: event.target.value})};
    updateLoc_3_city = (event) => {this.setState({loc_3_city: event.target.value})};
    updateLoc_3_state = (event) => {this.setState({loc_3_state: event.target.value})};
    updateLoc_3_zip = (event) => {this.setState({loc_3_zip: event.target.value})};




    render() {
        if(this.state.queryResults != null) {
            let testingCenters = this.state.queryResults.results;
            console.log(testingCenters);

            return (

            <div className ="wrapper">
            <br/><br/><br/>
            <h2>Here are some testing centers that fit you:</h2>
            {testingCenters.map(function(listItem){
                return( <div className="card card-screen">
                        <div className="screen">
                            <div className="form-check">
                                <h5 class="card-title"> {listItem.name}</h5>
                                <p class="card-text"> {listItem.address}</p>
                                <p class="card-text"> Payment Info: {listItem.payment}</p>
                                <p class="card-text"> Scheduling Info: {listItem.scheduling}</p>
                                <p class="card-text"> How will I receive test results?: {listItem.testResults}</p>
                            </div>
                       </div>
                       </div>)
            })
            }
            </div>

            );
        }
        return (
            <form><br/><br/><br/>
            <h2 id="screen-title">PRE-SCREENING FORM</h2><br/>
            <h2 id="screen-title">FIND A TESTING CENTER</h2><br/>
            <p id="screen-info">Fill out our form to find which COVID-19 testing centers you qualify for in Marion County.</p>
            <div class="card card-screen">
                

                <h4>Patient Screening</h4>
                <div className="screen">
                    <p>Are you over the age of 18?</p>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="screenOne" id="yes" value="yes" onChange={this.updateAge_18}/>
                        <label className="form-check-label" for="yes">
                            Yes
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="screenOne" id="no" value="no" onChange={this.updateAge_18}/>
                        <label className="form-check-label" for="no">
                            No
                        </label>
                    </div>

                    <p>Are you over the age of 65?</p>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="screenTwo" id="yes" value="yes" onChange={this.updateAge_65}/>
                        <label className="form-check-label" for="yes">
                            Yes
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="screenTwo" id="no" value="no" onChange={this.updateAge_65}/>
                        <label className="form-check-label" for="no">
                            No
                        </label>
                    </div>
                
                    <p>Have you been instructed to get tested by your state, health department or medical professional?</p>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="screenThree" id="yes" value="yes" onChange={this.updateOfficial_consent}/>
                        <label className="form-check-label" for="yes">
                            Yes
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="screenThree" id="no" value="no" onChange={this.updateOfficial_consent}/>
                        <label className="form-check-label" for="no">
                            No
                        </label>
                    </div>

                    <p>Have you had close contact, within 6 feet of a COVID-19 infected 
                    person for at least 15 minutes starting from 48 hours before the onset of the infected person’s illness?</p>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="screenFour" id="yes" value="yes" onChange={this.updateClose_contact}/>
                        <label className="form-check-label" for="yes">
                            Yes
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="screenFour" id="no" value="no" onChange={this.updateClose_contact}/>
                        <label className="form-check-label" for="no">
                            No
                        </label>
                    </div>

                    <p>Have you recently developed any COVID-19 symptoms? Select all that apply.</p>
                    <div class="form-check">
                        <input class="form-check-input" name="c" type="checkbox" checked={this.state.fever} onChange={this.updateFever} id="screenCheck1"/>
                        <label class="form-check-label" for="screenCheck1">
                            Fever
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" name="c" type="checkbox" value="" id="screenCheck2" checked={this.state.cough} onChange={this.updateCough}/>
                        <label class="form-check-label" for="screenCheck2">
                            Cough
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" name="c" type="checkbox" value="" id="screenCheck3" checked={this.state.breathing} onChange={this.updateBreathing}/>
                        <label class="form-check-label" for="screenCheck3">
                            Shortness of breath or difficulty breathing
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" name="c" type="checkbox" value="" id="screenCheck4"  checked={this.state.chills} onChange={this.updateChills}/>
                        <label class="form-check-label" for="screenCheck4">
                            Chills
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" name="c" type="checkbox" value="" id="screenCheck5" checked={this.state.shaking_chills} onChange={this.updateShaking_chills}/>
                        <label class="form-check-label" for="screenCheck5">
                            Repeated shaking with chills 
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" name="c" type="checkbox" value="" id="screenCheck6" checked={this.state.muscle_pain} onChange={this.updateMuscle_pain}/>
                        <label class="form-check-label" for="screenCheck6">
                            Muscle pain
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" name="c" type="checkbox" value="" id="screenCheck7" checked={this.state.headache} onChange={this.updateHeadache}/>
                        <label class="form-check-label" for="screenCheck7">
                            Headache
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" name="c" type="checkbox" value="" id="screenCheck8" checked={this.state.sore_throat} onChange={this.updateSore_throat}/>
                        <label class="form-check-label" for="screenCheck8">
                            Sore throat
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" name="c" type="checkbox" value="" id="screenCheck9" checked={this.state.taste_smell} onChange={this.updateTaste_smell}/>
                        <label class="form-check-label" for="screenCheck9">
                            New loss of taste or smell
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" name="c" type="checkbox" value="" id="screenCheck10" checked={this.state.vomiting} onChange={this.updateVomiting}/>
                        <label class="form-check-label" for="screenCheck10">
                            Vomiting
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" name="c" type="checkbox" value="" id="screenCheck11" checked={this.state.diarrhea} onChange={this.updateDiarrhea}/>
                        <label class="form-check-label" for="screenCheck11">
                            Diarrhea
                        </label>
                    </div>

                    <p>Are you part of a high-risk group due to underlying conditions? Select all that apply.</p>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="screenCheck13" checked={this.state.asthma_lung} onChange={this.updateAsthma_lung}/>
                        <label class="form-check-label" for="screenCheck13">
                            Asthma or chronic lung disease
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="screenCheck14" checked={this.state.diabetes} onChange={this.updateDiabetes}/>
                        <label class="form-check-label" for="screenCheck14">
                            Diabetes
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="screenCheck15" checked={this.state.obesity} onChange={this.updateObesity}/>
                        <label class="form-check-label" for="screenCheck15">
                            Extreme obesity
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="screenCheck16" checked={this.state.cirrhosis} onChange={this.updateCirrhosis}/>
                        <label class="form-check-label" for="screenCheck16">
                            Cirrhosis of the liver
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="screenCheck17" checked={this.state.heart_condition} onChange={this.updateHeart_condition}/>
                        <label class="form-check-label" for="screenCheck17">
                            Serious heart condition, such as congestive heart failure
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="screenCheck18" checked={this.state.harder_cough_disease} onChange={this.updateHarder_cough_disease}/>
                        <label class="form-check-label" for="screenCheck18">
                            Diseases or conditions that make it harder to cough
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="screenCheck19" checked={this.state.kidney_renal_disease} onChange={this.updateKidney_renal_disease}/>
                        <label class="form-check-label" for="screenCheck19">
                            Kidney failure or end stage renal disease 
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="screenCheck20" checked={this.state.weakened_immune_system} onChange={this.updateWeakened_immune_system}/>
                        <label class="form-check-label" for="screenCheck20">
                            Conditions that result in a weakened immune system, including cancer treatment
                        </label>
                    </div>

                    <p>Are you pregnant?</p>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="screenFive" id="yes" value="yes" onChange={this.updatePregnant}/>
                        <label className="form-check-label" for="yes">
                            Yes
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="screenFive" id="no" value="no" onChange={this.updatePregnant}/>
                        <label className="form-check-label" for="no">
                            No
                        </label>
                    </div>

                    <p>Are you an essential worker or healthcare worker?</p>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="screenSix" id="yes" value="yes" onChange={this.updateEssential_healthcare_worker}/>
                        <label className="form-check-label" for="yes">
                            Yes
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="screenSix" id="no" value="no" onChange={this.updateEssential_healthcare_worker}/>
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
                        <input type="text" class="form-control" id="inputAddress" placeholder="Address Line 1" onChange={this.updateAddress1}/>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress2"></label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Address Line 2" onChange={this.updateAddress2}/>
                    </div>
                
                    <div class="form-row">
                        <div class="col-7">
                        <input type="text" class="form-control" placeholder="City" onChange={this.updateCity}/>
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" placeholder="State" onChange={this.updateState}/>
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" placeholder="Zip" onChange={this.updateZip}/>
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
                        <input type="text" class="form-control" id="inputLocation" placeholder="Location Name" onChange={this.updateLoc_1_name}/>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress"></label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="Address Line 1" onChange={this.updateLoc_1_address1}/>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress2"></label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Address Line 2" onChange={this.updateLoc_1_address2}/>
                    </div>
                
                    <div class="form-row">
                        <div class="col-7">
                        <input type="text" class="form-control" placeholder="City" onChange={this.updateLoc_1_city}/>
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" placeholder="State" onChange={this.updateLoc_1_state}/>
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" placeholder="Zip" onChange={this.updateLoc_1_zip}/>
                        </div>
                    </div>
                </div> 

                <div class="address">
                    <div class="form-group">
                        <label id="loc-label" for="inputLocation">Location Two:</label>
                        <input type="text" class="form-control" id="inputLocation" placeholder="Location Name" onChange={this.updateLoc_2_name}/>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress"></label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="Address Line 1" onChange={this.updateLoc_2_address1}/>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress2"></label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Address Line 2" onChange={this.updateLoc_2_address2}/>
                    </div>
                
                    <div class="form-row">
                        <div class="col-7">
                        <input type="text" class="form-control" placeholder="City" onChange={this.updateLoc_2_city}/>
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" placeholder="State" onChange={this.updateLoc_2_state}/>
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" placeholder="Zip" onChange={this.updateLoc_2_zip}/>
                        </div>
                    </div>
                </div> 

                <div class="address">
                    <div class="form-group">
                        <label id ="loc-label" for="inputLocation">Location Three:</label>
                        <input type="text" class="form-control" id="inputLocation" placeholder="Location Name" onChange={this.updateLoc_3_name}/>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress"></label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="Address Line 1" onChange={this.updateLoc_3_address1}/>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress2"></label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Address Line 2" onChange={this.updateLoc_3_address2}/>
                    </div>
                
                    <div class="form-row">
                        <div class="col-7">
                        <input type="text" class="form-control" placeholder="City" onChange={this.updateLoc_3_city}/>
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" placeholder="State" onChange={this.updateLoc_3_state}/>
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" placeholder="Zip" onChange={this.updateLoc_3_zip}/>
                        </div>
                    </div>
                </div> 


                <div className="login-buttons">
                        <button type="submit" className="btn btn-custom" onClick={this.handleAllTest}>Submit</button><br/>
                </div>

            </div>
        </form>
        )
    }
}

export default Test
