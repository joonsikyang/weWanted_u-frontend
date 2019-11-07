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
            {props.code_test_level === 1 || props.code_test_level === 2 ? (
              <div>쉬움</div>
            ) : props.code_test_level === 3 ? (
              <div>보통</div>
            ) : props.code_test_level === 4 || props.code_test_level === 5 ? (
              <div>어려움</div>
            ) : (
              <div>없음</div>
            )}
            <div className="difficulty_color">
              <span
                className={`bar_1${
                  props.code_test_level !== "없음" ? "_on" : ""
                }`}
              ></span>
              <span
                className={`bar_2${
                  props.code_test_level !== "없음" &&
                  props.code_test_level !== 1
                    ? "_on"
                    : ""
                }`}
              ></span>
              <span
                className={`bar_3${
                  props.code_test_level === 3 ||
                  props.code_test_level === 4 ||
                  props.code_test_level === 5
                    ? "_on"
                    : ""
                }`}
              ></span>
              <span
                className={`bar_4${
                  props.code_test_level === 4 || props.code_test_level === 5
                    ? "_on"
                    : ""
                }`}
              ></span>
              <span
                className={`bar_5${props.code_test_level === 5 ? "_on" : ""}`}
              ></span>
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
