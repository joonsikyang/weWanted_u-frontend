import React, { Component } from "react";
import "./CdpInterview.scss";
import { expData, resultData } from "../CdpTable/CdpTableData";
import CdpInterviewBox from "../CdpInterviewBox";
import CdpReviewBox from "../CdpReviewBox";
import CdpModal from "../CdpModal/CdpModal";
import {
  category,
  career_year,
  interview_experience,
  interview_path,
  interview_result,
  code_test_level
} from "../CdpTable/CdpTableData";

export class CdpInterview extends Component {
  constructor() {
    super();
    this.state = {
      expData,
      resultData,
      category,
      career_year,
      interview_experience,
      interview_path,
      interview_result,
      code_test_level,
      showModal: false
    };
  }

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

  handleClick = () => {};

  render() {
    const {
      expData,
      resultData,
      showModal,
      category,
      career_year,
      interview_experience,
      interview_path,
      interview_result,
      code_test_level
    } = this.state;
    return (
      <div className="interview_container">
        <div className="interview_box_container">
          <div className="interview_box">
            <h6>면접 난이도</h6>
          </div>
          <div className="interview_box">
            <h6>면접 경로</h6>
          </div>
        </div>
        <div className="interview_box_container">
          <CdpInterviewBox data={expData} />
          <CdpInterviewBox data={resultData} />
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
            onClick={this.handleClick}
          />
        </div>
        <CdpReviewBox />
      </div>
    );
  }
}

export default CdpInterview;
