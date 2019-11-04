import React from "react";
import "./CdpInterviewBox.scss";
import { Doughnut } from "react-chartjs-2";

const CdpInterviewBox = props => {
  return (
    <div className="interview_box">
      <h6>면접 경험</h6>
      <Doughnut
        options={{
          legend: {
            display: true,
            position: "right"
          }
        }}
        data={props.data}
        height={120}
      />
    </div>
  );
};

export default CdpInterviewBox;
