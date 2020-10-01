import React, { useState } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};

const Gps = (props) => {
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  return (
    <div style={{ height: "100vh" }}>
      <Map google={props.google} zoom={14} style={mapStyles}>
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

        <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBFrYQMM8OKq4s4lN4Gp1LonrVS313IJ3I",
})(Gps);
