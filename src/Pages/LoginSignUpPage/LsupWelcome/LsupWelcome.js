import React, { Component } from "react";
import "./LsupWelcome.scss";

export class LsupWelcome extends Component {
  render() {
    return (
      <div className="welcome-container">
        <div className="title-container">
          <div className="title">> WeWanted</div>
          <div className="subtitle">요즘 개발자, 원티드</div>
        </div>
      </div>
    );
  }
}

export default LsupWelcome;
