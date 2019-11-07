import React, { Component } from "react";
import "./CdpPathTable.scss";

class CdpPathTable extends Component {
  render() {
    return (
      <div className="cdp_path_table">
        <table>
          <tbody>
            <tr className="first_row">
              <th>지인 추천</th>
              <td>23%</td>
              <th>공개 채용</th>
              <td>14%</td>
            </tr>
            <tr>
              <th>온라인 지원</th>
              <td>60%</td>
              <th>기타</th>
              <td>3%</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CdpPathTable;
