import React from "react";
import "./CdpTable.scss";
import { Doughnut } from "react-chartjs-2";

const CdpTable = props => {
  return (
    <table className="cdp_table">
      <tbody>
        {/*  <tr>
          <th className="circle"></th>
          <th>{props.top}</th>
          <td>{props.topData}%</td>
        </tr>
        <tr>
          <th className="circle"></th>
          <th>{props.middle}</th>
          <td>{props.middleData}%</td>
        </tr>
        <tr>
          <th className="circle"></th>
          <th>{props.bottom}</th>
          <td>{props.bottomData}%</td> */}

        <Doughnut data={props.chartData} width={100} height={50} />
        {/* </tr> */}
      </tbody>
    </table>
  );
};

export default CdpTable;
