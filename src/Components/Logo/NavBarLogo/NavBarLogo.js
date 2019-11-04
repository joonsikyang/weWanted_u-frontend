import React, { Component } from "react";
import "./NavBarLogo.scss";

export class NavBarLogo extends Component {
  render() {
    return (
      <div className="NavBarLogo">
        <button className="front" />
        <button className="back" />
        <button className="full" />
      </div>
    );
  }
}

export default NavBarLogo;
