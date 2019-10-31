import React, { Component } from "react";
import "./CdpPosition.scss";
import { CdpPositionData, CdpCompanyInfoData } from "../CdpPositionData";

class CdpPosition extends Component {
  constructor() {
    super();
    this.state = {
      positionData: CdpPositionData,
      companyData: CdpCompanyInfoData
    };
  }

  render() {
    const { positionData, companyData } = this.state;
    return (
      <div className="cdp_position">
        <h4>{positionData.position_name}</h4>
        <h5>
          {companyData.location} - {companyData.country}
        </h5>
        <p>마감일: {positionData.dead_line}</p>
      </div>
    );
  }
}

export default CdpPosition;
