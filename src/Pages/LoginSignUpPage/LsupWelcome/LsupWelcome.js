import React, { Component } from "react";
import "./LsupWelcome.scss";

export class LsupWelcome extends Component {
  constructor() {
    super();
    this.state = {
      height: window.innerHeight - 50
    };
  }

  render() {
    return (
      <div className="welcome-container" style={{ height: this.state.height }}>
        <div className="title-container">
          <div className="title">> WeWanted</div>
          <div className="subtitle">요즘 개발자, 원티드</div>
        </div>
      </div>
    );
  }
}

export default LsupWelcome;
