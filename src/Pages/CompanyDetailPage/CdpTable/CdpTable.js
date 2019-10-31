import React, { Component } from "react";
import "./CdpTable.scss";

export class CdpTable extends Component {
  render() {
    return (
      <table className="cdp_table">
        <tbody>
          <tr>
            <th>gd</th>
            <th>긍정적</th>
            <td>38%</td>
          </tr>
          <tr>
            <th>부정적</th>
            <td>37%</td>
          </tr>
          <tr>
            <th>보통</th>
            <td>25%</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default CdpTable;
