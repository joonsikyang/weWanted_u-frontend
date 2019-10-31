import React, { Component } from "react";
import "./CdpPosition.scss";
import { CdpPositionData } from "../CdpPositionData";

class CdpPosition extends Component {
  constructor() {
    super();
    this.state = {
      data: CdpPositionData
    };
  }

  render() {
    const { data } = this.state;
    return (
      <div className="cdp_position">
        <h4>{data.position_name}</h4>
        <h5>{data.follow_count}</h5>
        <p>마감일 {data.dead_line}</p>
      </div>
    );
  }
}

export default CdpPosition;
