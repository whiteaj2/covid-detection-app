import React, { Component } from 'react'
import image from "../images/icons8-find-hospital-96.png"
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
                    <h1 class="display-3 font-weight-bold">Everything COVID-19</h1>
                    <p class="lead">Find a COVID-19 testing center you qualify for and contribute to our visualization map tracking the pandemic in Indianapolis. </p>
                </div>
            </div>

            <div class="card-deck">
                <div class="card">
                    <img class="card-pic" src={one} width="150" alt="One"/>
                    <div class="card-body">
                            <h5 class="card-title">Login or create your account</h5>
                            <a class="btn btn-custom" role="button">Sign Up</a>
                    </div>
                </div>
                <div class="card">
                    <img class="card-pic" src={two} width="150" alt="Two"/>
                    <div class="card-body">
                        <h5 class="card-title">Fill out our quick screen to find your testing center</h5>
                        <p class="card-text">Text</p>
                    </div>
                </div>
                <div class="card">
                    <img class="card-pic" src={three} width="150" alt="Three"/>
                    <div class="card-body">
                        <h5 class="card-title">Let us know how your test turned out and help us track the pandemic in Indianpolis</h5>
                        <p class="card-text">Text</p>
                    </div>
                </div>
            </div>

        </div>
    
        )
    }
};
export default Main