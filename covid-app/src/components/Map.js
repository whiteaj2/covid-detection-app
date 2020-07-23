import React, { Component } from 'react'
import one from '../images/One 2.png';
import two from '../images/Two 2.png';
import three from '../images/Three 2.png';


export class Main extends Component {
    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
      };

      onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

onClose = props => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    });
  }
};

    render() {
        return (

        <div class="wrapper">
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4 font-weight-bold">Everything COVID-19</h1>
                    <p class="lead">Find a COVID-19 testing center you qualify for and contribute to our <br/> visualization map tracking the pandemic in Indianapolis. </p>
                    <a href="signup" class="btn btn-custom" role="button">Get Started</a>
                </div>
            </div>

            <div class="card-deck">
                
                <div class="card">
                    <img class="card-pic" src={one} width="150" alt="One"/>
                    <div class="card-body">
                    <h5 class="card-title">Create your account or login</h5>
                    </div>
                </div>
                <div class="card">
                    <img class="card-pic" src={two} width="150" alt="Two"/>
                    <div class="card-body">
                    <h5 class="card-title">Fill out our quick screen to find your testing center</h5>
                    </div>
                </div>
                <div class="card">
                    <img class="card-pic" src={three} width="150" alt="Three"/>
                    <div class="card-body">
                    <h5 class="card-title">Let us know how your test turned out and help us track the pandemic in Indianapolis</h5>
                    </div>
                </div>
            </div>

            <div class="about-us jumbotron jumbotron-fluid">
                <div class="container">
                    <h2 class="display-5 font-weight-bold">ABOUT US</h2>
                    <p class="lead">
                        We used testing center information from the Indiana State Department of Health to create a 
                        pre-screening form that allows you to quickly find which centers at which you qualify for testing in Marion County.
                    </p>
                    <p class="lead">
                        Along with providing you testing center information, we rely on your help to populate our COVID-19 visualization map
                        of Indiana. By providing your last known whereabouts, we are able to show which areas of Indiana have the potential to 
                        become COVID-19 hotspots. Your data is kept completely anonymous, and it helps us all be able to see what is happening in
                        our state so we can better protect our families.  
                    </p>
                 
                    
                    
                    
                </div>
            </div>

        </div>
    
        )
    }
};
export default Main