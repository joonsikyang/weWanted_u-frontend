import React from "react";
import "./CdpInterviewBox.scss";
import { Doughnut } from "react-chartjs-2";

const CdpInterviewBox = props => {
  return (
    <div className="interview_box">
      <h6>{props.title}</h6>
      <Doughnut
        options={{
          legend: {
            display: true,
            position: "right"
          }
        }}
        data={props.data}
      />
    </div>
  );
};

export default CdpInterviewBox;
