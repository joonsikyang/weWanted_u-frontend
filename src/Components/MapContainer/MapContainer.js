import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const MapContainer = props => {
  const mapStyles = {
    width: "100%",
    height: "100%",
    marginTop: 20
  };
  return (
    <Map
      google={props.google}
      zoom={16}
      style={mapStyles}
      initialCenter={{
        lat: props.companyData.lat,
        lng: props.companyData.lng
      }}
    >
      <Marker
        position={{
          lat: props.companyData.lat,
          lng: props.companyData.lng
        }}
      />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyApqVEwscn9xKtVbVZAV2nh5hNIx4JTGE8"
})(MapContainer);
