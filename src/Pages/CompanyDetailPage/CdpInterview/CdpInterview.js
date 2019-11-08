import React, { Component } from "react";
import "./CdpInterview.scss";
import { expData, resultData } from "../CdpTable/CdpTableData";
import CdpInterviewBox from "../CdpInterviewBox";
import CdpReviewBox from "../CdpReviewBox";
import CdpModal from "../CdpModal/CdpModal";
import CdpPathTable from "../CdpPathTable";
import MapContainer from "Components/MapContainer";

export class CdpInterview extends Component {
  constructor() {
    super();
    this.state = {
      expData,
      resultData,
      review_list: [],
      category: [],
      career_year: [],
      interview_experience: [],
      interview_path: [],
      interview_result: [],
      code_test_level: [],
      showModal: false
    };
  }

  componentDidMount = () => {
    fetch("http://10.58.7.182:8001/repl/1")
      .then(res => res.json())
      .then(data => {
        this.setState({
          category: data.category
        });
      });
    fetch("http://10.58.7.182:8001/repl/2")
      .then(res => res.json())
      .then(data => {
        this.setState({
          career_year: data.career
        });
      });
    fetch("http://10.58.7.182:8001/repl/3")
      .then(res => res.json())
      .then(data => {
        this.setState({
          interview_experience: data.mood
        });
      });
    fetch("http://10.58.7.182:8001/repl/4")
      .then(res => res.json())
      .then(data => {
        this.setState({
          interview_path: data.route
        });
      });
    fetch("http://10.58.7.182:8001/repl/5")
      .then(res => res.json())
      .then(data => {
        this.setState({
          code_test_level: data.test_level
        });
      });
    fetch("http://10.58.7.182:8001/repl/6")
      .then(res => res.json())
      .then(data => {
        this.setState({
          interview_result: data.result
        });
      });
  };

  setReviewList = review_list => {
    this.setState({
      review_list
    });
  };

  handleOpenModal = () => {
    this.setState({
      showModal: true
    });
  };

  handleCloseModal = () => {
    this.setState({
      showModal: false
    });
  };

  render() {
    const {
      expData,
      resultData,
      showModal,
      review_list,
      category,
      career_year,
      interview_experience,
      interview_path,
      interview_result,
      code_test_level
    } = this.state;
    const avg_num = 2.5;
    const avg_num_percent = (avg_num / 5) * 100 + "%";
    const circleStyle = { left: `calc(${avg_num_percent} - 8px)` };
    return (
      <div className="interview_container">
        <div className="interview_box_container">
          <div className="interview_box">
            <h6>면접 난이도</h6>
            <div className="score_box">
              <span className="average_score">{avg_num}</span>
              <div className="score_bar_box">
                <div className="score_text">
                  <span className="easy">쉬움</span>
                  <span className="difficulty">어려움</span>
                </div>
                <div className="score_bar">
                  <div className="outer_circle" style={circleStyle}>
                    <div className="inner_circle"></div>
                  </div>
                </div>
                <div className="score_number">
                  <span className="zero">0</span>
                  <span className="five">5</span>
                </div>
              </div>
            </div>
          </div>
          <div className="interview_box">
            <h6>면접 경로</h6>
            <CdpPathTable />
          </div>
        </div>
        <div className="interview_box_container">
          <CdpInterviewBox title="면접 경험" data={expData} />
          <CdpInterviewBox title="면접 결과" data={resultData} />
        </div>
        <div className="review_container">
          <div className="review">면접 후기</div>
          <div className="writing" onClick={this.handleOpenModal}>
            후기 작성
          </div>
          <CdpModal
            isOpen={showModal}
            handleCloseModal={this.handleCloseModal}
            handleOpenModal={this.handleOpenModal}
            category={category}
            career_year={career_year}
            interview_experience={interview_experience}
            interview_path={interview_path}
            interview_result={interview_result}
            code_test_level={code_test_level}
            companyData={this.props.companyData}
            setReviewList={this.setReviewList}
          />
        </div>
        {review_list.map(e => (
          <CdpReviewBox
            category={e.category}
            career_year={e.career}
            interview_experience={e.mood}
            interview_path={e.route}
            code_test_level={e.test_level}
            interview_result={e.result}
            overall_review={e.review}
            question={e.question}
            answer={e.answer}
          />
        ))}
        <div className="bottom_responsive">
          <div className="map_bottom">
            <MapContainer companyData={this.props.companyData} />
          </div>
          <div className="cdp_position">
            <div className="position_box">
              <h4>{this.props.positionData.position}</h4>
              <h5>
                {this.props.companyData.city} - {this.props.companyData.country}
              </h5>
              <p>
                마감일:
                {this.props.positionData.dead_line
                  ? this.props.positionData.dead_line
                  : "상시 채용"}
              </p>
            </div>
            <div className="logo_and_name">
              <div
                style={{
                  backgroundImage: `url(${this.props.companyData.logo_image})`
                }}
                className="logo"
              ></div>
              <div>
                <div className="company_name">
                  {this.props.companyData.company_name}
                </div>
                <button
                  onClick={this.props.sendToken}
                  className={`follow_btn${this.props.follow ? "" : "_on"}`}
                >
                  팔로우하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CdpInterview;
