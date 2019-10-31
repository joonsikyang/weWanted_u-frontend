import React, { Component } from "react";
import "./Deam.scss";

export class Deam extends Component {
  render() {
    return <div className="deam" style={{ display: this.props.display }}></div>;
  }
}

export default Deam;
