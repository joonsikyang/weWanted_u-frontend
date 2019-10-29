import React, { Component } from "react";
import "./CDP_CompanyHeader.scss";

export class CDP_CompanyHeader extends Component {
  render() {
    return (
      <header className="CDP_companyHeader">
        <div className="CDP_companyLogoAndName">
          <span className="CDP_companyLogo"></span>
          <h2 className="CDP_companyName">같다(gatda Corp)</h2>
        </div>
        <button className="CDP_followButton">팔로우</button>
      </header>
    );
  }
}

export default CDP_CompanyHeader;
