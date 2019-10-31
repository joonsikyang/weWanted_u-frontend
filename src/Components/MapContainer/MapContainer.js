import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { CdpCompanyInfoData } from "Pages/CompanyDetailPage/CdpPositionData";

class MapContainer extends Component {
  constructor() {
    super();
    this.state = {
      data: CdpCompanyInfoData
    };
  }
  render() {
    const mapStyles = {
      width: "100%",
      height: "100%",
      marginTop: 20
    };
    const { data } = this.state;
    return (
      <Map
        google={this.props.google}
        zoom={16}
        style={mapStyles}
        initialCenter={{
          lat: data.latitude,
          lng: data.longitude
        }}
      >
        <Marker
          position={{
            lat: data.latitude,
            lng: data.longitude
          }}
        />
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyApqVEwscn9xKtVbVZAV2nh5hNIx4JTGE8"
})(MapContainer);
