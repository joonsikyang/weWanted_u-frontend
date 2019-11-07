import React, { Component } from "react";
import "./CdpInterview.scss";
import { expData, resultData } from "../CdpTable/CdpTableData";
import CdpInterviewBox from "../CdpInterviewBox";
import CdpReviewBox from "../CdpReviewBox";
import CdpModal from "../CdpModal/CdpModal";
import { review_list } from "../CdpTable/CdpTableData";
import CdpPathTable from "../CdpPathTable";

export class CdpInterview extends Component {
  constructor() {
    super();
    this.state = {
      expData,
      resultData,
      review_list,
      showModal: false
    };
  }

  chart_review_api = () => {
    fetch("api")
      .then(res => res.json)
      .then(data => {
        this.setState({
          expData: data.expData,
          resultData: data.resultData,
          review_list: data.review_list
        });
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
    const { expData, resultData, showModal, review_list } = this.state;
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
          />
        </div>
        {review_list.map(e => (
          <CdpReviewBox
            category={e.category}
            career_year={e.career_year}
            interview_experience={e.interview_experience}
            interview_path={e.interview_path}
            code_test_level={e.code_test_level}
            interview_result={e.interview_result}
            overall_review={e.overall_review}
            question={e.question}
            answer={e.answer}
          />
        ))}
      </div>
    );
  }
}

export default CdpInterview;
