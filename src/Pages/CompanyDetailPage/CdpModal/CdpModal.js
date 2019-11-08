import React from "react";
import ReactModal from "react-modal";
import "./CdpModal.scss";
import CdpTable from "../CdpTable/CdpTable";

class CdpModal extends React.Component {
  constructor() {
    super();
    this.state = {
      category_value: "front_end",
      career_year_value: "1년 이하",
      interview_experience_value: "긍정",
      interview_path_value: "지인 추천",
      interview_result_value: "합격",
      code_test_level_value: "없음",
      question: "",
      answer: "",
      overall_review: "",
      review_list: []
    };
  }

  handlePost = () => {
    fetch("http://10.58.7.182:8001/follow", {
      method: "post",
      headers: {
        Authorization: window.localStorage.JsonWebToken
      },
      body: JSON.stringify({
        category: this.state.career_year_value,
        career: this.state.career_year_value,
        mood: this.state.interview_experience_value,
        route: this.state.interview_path_value,
        result: this.state.interview_result_value,
        test_level: this.state.code_test_level_value,
        question: this.state.question,
        answer: this.state.answer,
        overall_review: this.state.overall_review
      })
    })
      .then(response => response.json())
      .then(res => {
        this.setState({ review_list: this.state.review_list.concat(res.data) });
      });
  };

  categoryChange = e => {
    this.setState({
      category_value: e
    });
  };

  careerChange = e => {
    this.setState({
      career_year_value: e
    });
  };

  experienceChange = e => {
    this.setState({
      interview_experience_value: e
    });
  };

  pathChange = e => {
    this.setState({
      interview_path_value: e
    });
  };

  codeChange = e => {
    this.setState({
      code_test_level_value: e
    });
  };

  resultChange = e => {
    this.setState({
      interview_result_value: e
    });
  };
  questionChange = e => {
    this.setState({
      question: e.target.value
    });
  };
  answerChange = e => {
    this.setState({
      answer: e.target.value
    });
  };
  overallReviewChange = e => {
    this.setState({
      overall_review: e.target.value
    });
  };

  render() {
    return (
      <ReactModal
        isOpen={this.props.isOpen}
        className="modal_content"
        overlayClassName="modal_overlay"
        onRequestClose={this.props.handleCloseModal}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
      >
        <div className="modal_box">
          <header>
            <h3>면접후기 작성</h3>
          </header>
          <div className="modal_main">
            <div className="modal_top">
              <CdpTable
                category={this.props.category}
                career_year={this.props.career_year}
                interview_experience={this.props.interview_experience}
                interview_path={this.props.interview_path}
                interview_result={this.props.interview_result}
                code_test_level={this.props.code_test_level}
                category_change={e => {
                  this.categoryChange(e);
                }}
                career_change={e => {
                  this.careerChange(e);
                }}
                experience_change={e => {
                  this.experienceChange(e);
                }}
                path_change={e => {
                  this.pathChange(e);
                }}
                code_change={e => {
                  this.codeChange(e);
                }}
                result_change={e => {
                  this.resultChange(e);
                }}
              />
            </div>
            <div className="modal_middle">
              <div className="question">
                <span>면접 질문</span>
                <textarea
                  onChange={this.questionChange}
                  placeholder=" 최대한 자세하게 작성해주세요."
                ></textarea>
              </div>
              <div className="answer">
                <span>면접 답변</span>
                <textarea
                  onChange={this.answerChange}
                  placeholder=" 최대한 자세하게 작성해주세요."
                ></textarea>
              </div>
              <div className="interview_review">
                <span>전체적인 면접 후기</span>
                <textarea
                  onChange={this.overallReviewChange}
                  placeholder=" 최대한 자세하게 작성해주세요."
                ></textarea>
              </div>
            </div>
            <div className="modal_bottom">
              <div className="close" onClick={this.props.handleCloseModal}>
                취소
              </div>
              <div onClick={this.handlePost} className="completed">
                작성 완료
              </div>
            </div>
          </div>
        </div>
      </ReactModal>
    );
  }
}

export default CdpModal;
