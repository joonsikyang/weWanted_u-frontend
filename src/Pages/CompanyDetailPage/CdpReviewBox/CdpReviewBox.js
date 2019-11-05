import React from "react";
import "./CdpReviewBox.scss";

const CdpReviewBox = props => {
  return (
    <div className="review_box">
      <span className="user">
        {props.category} | {props.career_year}
      </span>
      <article className="content_box">
        <div className="left_box">
          <span className="title">코딩 테스트</span>
          <div className="difficulty">
            <div>{props.code_test_level}</div>
            <span className="bar_1"></span>
            <span className="bar_2"></span>
            <span className="bar_3"></span>
            <span className="bar_4"></span>
            <span className="bar_5"></span>
          </div>
          <span className="title">면접 경로</span>
          <div>{props.interview_path}</div>
        </div>
        <div className="right_box">
          <div className="overall_review">"{props.overall_review}"</div>
          <span className="title">면접 질문</span>
          <div className="question">{props.question}</div>
          <span className="title">면접 답변</span>
          <div className="answer">{props.answer}</div>
          <div className="result_container">
            <div className="result_box">
              <span className="result_name">면접결과</span>
              <span className="result_value">{props.interview_result}</span>
            </div>
            <div className="result_box">
              <span className="result_name">면접 분위기</span>
              <span className="result_value">{props.interview_experience}</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CdpReviewBox;
