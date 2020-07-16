import React, { Component } from 'react'
import image from "../images/icons8-find-hospital-96.png"

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
                    <h1 class="display-4">Covid Detection Title</h1>
                    <p class="lead">This is the subtitle.</p>
                </div>
            </div>

            <div class="card-deck">
                
                <div class="card">
                    <img src={image} alt="Card image cap"/>
                    <div class="card-body">
                    <h5 class="card-title">Find Your Testing Center</h5>
                    <p class="card-text">Text</p>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src="" alt="Card image cap"/>
                    <div class="card-body">
                    <h5 class="card-title">Visualize Data</h5>
                    <p class="card-text">Text</p>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src="" alt="Card image cap"/>
                    <div class="card-body">
                    <h5 class="card-title">Voluntary & Secure</h5>
                    <p class="card-text">Text</p>
                    </div>
                </div>
            </div>

        </div>
    
        )
    }
};
export default Main