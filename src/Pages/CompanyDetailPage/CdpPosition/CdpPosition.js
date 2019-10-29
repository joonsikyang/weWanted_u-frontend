import React, { Component } from "react";
import "./CdpPosition.scss";
import CdpPositionData from "../CdpPositionData";

class CdpPosition extends Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       data: CDP_PositionData
  //     };
  //   }

  render() {
    return (
      <a className="cdp_position">
        <h4>Application Product Manager 어플 매니저</h4>
        <h5>채용보상금 1,000,000원</h5>
        <p>2020.01.24 까지</p>
      </a>
    );
  }
}

export default CdpPosition;
