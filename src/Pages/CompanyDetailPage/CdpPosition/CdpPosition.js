import React, { Component } from "react";
import "./CdpPosition.scss";
import { CdpPositionData, CdpCompanyInfoData } from "../CdpPositionData";

class CdpPosition extends Component {
  constructor() {
    super();
    this.state = {
      positionData: {},
      companyData: {}
    };
  }

  componentDidMount() {
    fetch("http://10.58.5.27:8000/job/detail/1")
      .then(res => res.json())
      .then(res => {
        this.setState(
          {
            positionData: res.job,
            companyData: res.company
          },
          console.log(res.job)
        );
      });
  }

  render() {
    const { positionData, companyData } = this.state;
    return (
      <div className="cdp_position">
        <h4>{positionData.position}</h4>
        <h5>
          {companyData.city} - {companyData.country}
        </h5>
        <p>마감일: {positionData.dead_line}</p>
      </div>
    );
  }
}

export default CdpPosition;
