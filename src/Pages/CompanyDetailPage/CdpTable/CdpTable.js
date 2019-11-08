import React from "react";
import "./CdpTable.scss";

class CdpTable extends React.Component {
  constructor() {
    super();
    this.state = {
      category: "front_end",
      career_year: "1년 이하",
      interview_experience: "긍정",
      interview_path: "지인추천",
      code_test_level: "1",
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
                    <option key={e.id}>{e.category}</option>
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
                    <option key={e.id}>{e.career}</option>
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
                    <option key={e.id}>{e.mood}</option>
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
                    <option key={e.id}>{e.route}</option>
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
                  <option key="2">없음</option>
                  {this.props.code_test_level.map(e => (
                    <option key={e.id}>{e.level}</option>
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
                    <option key={e.id}>{e.result}</option>
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
