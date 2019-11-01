import React, { Component } from "react";
import "./CdpInterview.scss";
import { TableData, expData, resultData } from "../CdpTable/CdpTableData";
import CdpInterviewBox from "../CdpInterviewBox";
import CdpReviewBox from "../CdpReviewBox";

export class CdpInterview extends Component {
  constructor() {
    super();
    this.state = {
      data: TableData,
      expData,
      resultData
    };
  }
  render() {
    const { expData, resultData } = this.state;
    return (
      <div className="interview_container">
        <div className="interview_box_container">
          <div className="interview_box">
            <h6>면접 난이도</h6>
          </div>
          <div className="interview_box">
            <h6>면접 경로</h6>
          </div>
        </div>
        <div className="interview_box_container">
          <CdpInterviewBox data={expData} />
          <CdpInterviewBox data={resultData} />
        </div>
        <div className="review_container">
          <div className="review">면접 후기</div>
          <div className="writing">후기 작성</div>
        </div>
        <CdpReviewBox />
      </div>
    );
  }
}

export default CdpInterview;
