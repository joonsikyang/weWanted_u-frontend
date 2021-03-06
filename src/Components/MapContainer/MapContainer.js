import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const MapContainer = props => {
  const mapStyles = {
    marginTop: 20
  };
  return (
    <Map
      google={props.google}
      zoom={16}
      style={mapStyles}
      initialCenter={{
        lat: parseFloat(props.companyData.lat),
        lng: parseFloat(props.companyData.lng)
      }}
    >
      <Marker
        position={{
          lat: parseFloat(props.companyData.lat),
          lng: parseFloat(props.companyData.lng)
        }}
      />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyApqVEwscn9xKtVbVZAV2nh5hNIx4JTGE8"
})(MapContainer);
