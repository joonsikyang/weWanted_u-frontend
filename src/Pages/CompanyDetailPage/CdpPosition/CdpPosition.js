import React from "react";
import "./CdpPosition.scss";

const CdpPosition = props => {
  return (
    <div className="cdp_position">
      <h4>{props.positionData.position}</h4>
      <h5>
        {props.companyData.city} - {props.companyData.country}
      </h5>
      <p>마감일: {props.positionData.dead_line}</p>
    </div>
  );
};

export default CdpPosition;
