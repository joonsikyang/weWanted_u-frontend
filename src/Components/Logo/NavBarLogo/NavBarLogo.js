import React, { Component } from "react";
import "./NavBarLogo.scss";

export class NavBarLogo extends Component {
  render() {
    return (
      <div className="NavBarLogo">
        <button className="front"></button>
        <button className="back"></button>
        <button className="full"></button>
      </div>
    );
  }
}

export default NavBarLogo;
