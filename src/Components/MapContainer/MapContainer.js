import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { CdpCompanyInfoData } from "Pages/CompanyDetailPage/CdpPositionData";

class MapContainer extends Component {
  constructor() {
    super();
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    fetch("http://10.58.5.27:8000/job/detail/1")
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.company
        });
      });
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
          lat: this.state.data.lat,
          lng: this.state.data.lng
        }}
      >
        <Marker
          position={{
            lat: this.state.data.lat,
            lng: this.state.data.lng
          }}
        />
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyApqVEwscn9xKtVbVZAV2nh5hNIx4JTGE8"
})(MapContainer);
