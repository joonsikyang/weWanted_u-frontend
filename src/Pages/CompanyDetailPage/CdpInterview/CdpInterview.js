import React, { Component } from "react";
import "./CdpInterview.scss";
import CdpTable from "../CdpTable";
import { TableData, expData, resultData } from "../CdpTable/CdpTableData";
import { Doughnut } from "react-chartjs-2";

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
          </div>
        </div>
        <div className="interview_box_container">
          <div className="interview_box">
            <h6>면접 경험</h6>
            <Doughnut
              options={{
                legend: {
                  display: true,
                  position: "right"
                }
              }}
              data={expData}
              height={120}
            />
          </div>
          <div className="interview_box">
            <h6>면접 결과</h6>
            <Doughnut
              options={{
                legend: {
                  display: true,
                  position: "right"
                }
              }}
              data={resultData}
              height={120}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CdpInterview;
