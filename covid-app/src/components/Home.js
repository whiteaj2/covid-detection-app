import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import Geocode from "react-geocode";

const mapStyles = {
  width: '100',
  top: '15%'
};

const apiKey = 'AIzaSyBc8EJ3AVtUvsPpYTj3paPRTRT44ILmrqI';

Geocode.setApiKey("AIzaSyBc8EJ3AVtUvsPpYTj3paPRTRT44ILmrqI");

export class Home extends Component {

constructor(props) {
   super(props)
}

state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {},          //Shows the infoWindow to the selected place upon a marker
        features: []
};

onMarkerClick = (props, marker, e) => {}

onClose = props => {};

renderIndividualMarker = (markerInfo) => {
  return (<Marker
              position={{lat: markerInfo.latitude,
                      lng: markerInfo.longitude }}></Marker>
                    );
};

saveCoordinates = (jsonData) => {
  if(jsonData.lat_1 != 0 && jsonData.long_1 != 0) {
        let newFeatures = this.state.features;
        newFeatures.push({latitude: jsonData.lat_1, longitude: jsonData.long_1});
        this.setState({features: newFeatures});
      }

      if(jsonData.lat_2 != 0 && jsonData.long_2 != 0) {
        let newFeatures1 = this.state.features;
        newFeatures1.push({latitude: jsonData.lat_2, longitude: jsonData.long_2});
        this.setState({features: newFeatures1});
      }

      if(jsonData.lat_3 != 0 && jsonData.long_3 != 0) {
        let newFeatures2 = this.state.features;
        newFeatures2.push({latitude: jsonData.lat_3, longitude: jsonData.long_3});
        this.setState({features: newFeatures2});
      }
};

fetchMarkers = () => {
  fetch("/getLocationData", {method: "POST", body: JSON.stringify({})})
  .then(res => {return res.json()})
  .then(res => {
    res.results.map(this.saveCoordinates);
  });

};

renderMarkers = () => {
    this.fetchMarkers();
    return this.state.features.map(this.renderIndividualMarker);
};


  render() {


    return (

        <Map google={this.props.google}
          zoom={10}
          style={mapStyles}
          initialCenter={{ lat: 39.8123637, lng: -86.1821156 }}>

          {this.renderMarkers()}

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>
      );
    }
    

    }

export default GoogleApiWrapper(
  (props)=>({apiKey: apiKey})
)(Home);