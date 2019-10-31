import React, { Component } from "react";
import "./CdpInterview.scss";
import CdpTable from "../CdpTable";

export class CdpInterview extends Component {
  render() {
    return (
      <div
        style={{ display: this.props.display }}
        className="interview_container"
      >
        <div className="interview_box_container">
          <div className="interview_box">
            <h6>면접 난이도</h6>
          </div>
          <div className="interview_box">
            <h6>면접 경로</h6>
            <CdpTable />
          </div>
        </div>
        <div className="interview_box_container">
          <div className="interview_box">
            <h6>면접 경험</h6>
            <CdpTable />
          </div>
          <div className="interview_box">
            <h6>면접 결과</h6>
            <CdpTable />
          </div>
        </div>
      </div>
    );
  }
}

export default CdpInterview;
