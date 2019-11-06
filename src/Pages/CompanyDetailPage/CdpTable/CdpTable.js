import React from "react";
import "./CdpTable.scss";

class CdpTable extends React.Component {
  constructor() {
    super();
    this.state = {
      category: "frontend",
      career_year: "신입",
      interview_experience: "긍정적",
      interview_path: "지인추천",
      code_test_level: "없음",
      interview_result: "합격"
    };
  }

  render() {
    return (
      <table className="cdp_table">
        <tbody>
          <tr>
            <th>직종</th>
            <td>
              <div className="select_container">
                <select
                  onChange={e => {
                    this.props.category_change(e.target.value);
                  }}
                >
                  {this.props.category.map(e => (
                    <option key={e.id}>{e.value}</option>
                  ))}
                </select>
              </div>
            </td>
            <th>연차</th>
            <td>
              <div className="select_container">
                <select
                  onChange={e => {
                    this.props.career_change(e.target.value);
                  }}
                >
                  {this.props.career_year.map(e => (
                    <option key={e.id}>{e.value}</option>
                  ))}
                </select>
              </div>
            </td>
          </tr>

          <tr>
            <th>면접 분위기</th>
            <td>
              <div className="select_container">
                <select
                  onChange={e => {
                    this.props.experience_change(e.target.value);
                  }}
                >
                  {this.props.interview_experience.map(e => (
                    <option key={e.id}>{e.value}</option>
                  ))}
                </select>
              </div>
            </td>
            <th>면접 경로</th>
            <td>
              <div className="select_container">
                <select
                  onChange={e => {
                    this.props.path_change(e.target.value);
                  }}
                >
                  {this.props.interview_path.map(e => (
                    <option key={e.id}>{e.value}</option>
                  ))}
                </select>
              </div>
            </td>
          </tr>

          <tr>
            <th>코딩 테스트</th>
            <td>
              <div className="select_container">
                <select
                  onChange={e => {
                    this.props.code_change(e.target.value);
                  }}
                >
                  {this.props.code_test_level.map(e => (
                    <option key={e.id}>{e.value}</option>
                  ))}
                </select>
              </div>
            </td>
            <th>면접 결과</th>
            <td>
              <div className="select_container">
                <select
                  onChange={e => {
                    this.props.result_change(e.target.value);
                  }}
                >
                  {this.props.interview_result.map(e => (
                    <option key={e.id}>{e.value}</option>
                  ))}
                </select>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default CdpTable;
