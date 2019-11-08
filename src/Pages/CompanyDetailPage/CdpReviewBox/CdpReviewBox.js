import React from "react";
import "./CdpReviewBox.scss";

const bars = { 1: "쉬움", 2: "쉬움", 3: "보통", 4: "어려움", 5: "어려움" };

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
            {bars[props.code_test_level]}
            <div className="difficulty_color">
              {Object.entries(bars).map(([e]) => {
                return (
                  <span
                    className={`bar bar${e} ${
                      props.code_test_level >= e ? "on" : ""
                    }`}
                  ></span>
                );
              })}
            </div>
          </div>
          <span className="title">면접 경로</span>
          <div className="interview_path">{props.interview_path}</div>
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
