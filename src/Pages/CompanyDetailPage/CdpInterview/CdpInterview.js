import React, { Component } from "react";
import "./CdpInterview.scss";

export class CdpInterview extends Component {
  render() {
    return (
      <div className="interview_container">
        <h6>면접 후기</h6>
        <div className="interview_box_container">
          <div className="interview_box">면접 난이도</div>
          <div className="interview_box">면접 경로</div>
          <div className="interview_box">면접 경험</div>
          <div className="interview_box">면접 결과</div>
        </div>
      </div>
    );
  }
}

export default CdpInterview;
