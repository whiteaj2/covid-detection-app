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
                    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </div>
            </div>

        </div>
    
        )
    }
};
export default Main