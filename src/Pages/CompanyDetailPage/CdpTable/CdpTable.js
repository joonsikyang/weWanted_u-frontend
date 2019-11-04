import React from "react";
import "./CdpTable.scss";
import Select from "react-select";

const CdpTable = props => {
  return (
    <table className="cdp_table">
      <tbody>
        <tr>
          <th>직종</th>
          <td>
            <div className="select_container">
              <Select options={props.category} />
            </div>
          </td>
          <th>연차</th>
          <td>
            <div className="select_container">
              <Select options={props.career_year} />
            </div>
          </td>
        </tr>

        <tr>
          <th>면접 분위기</th>
          <td>
            <div className="select_container">
              <Select options={props.interview_experience} />
            </div>
          </td>
          <th>면접 경로</th>
          <td>
            <div className="select_container">
              <Select options={props.interview_path} />
            </div>
          </td>
        </tr>

        <tr>
          <th>코딩 테스트</th>
          <td>
            <div className="select_container">
              <Select options={props.code_test_level} />
            </div>
          </td>
          <th>면접 결과</th>
          <td>
            <div className="select_container">
              <select className="interview_result">
                {props.interview_result.map(e => (
                  <option value="${e.name}">{e.name}</option>
                ))}
              </select>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CdpTable;
