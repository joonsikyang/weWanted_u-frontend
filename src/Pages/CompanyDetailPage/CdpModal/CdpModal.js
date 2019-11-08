import React from "react";
import ReactModal from "react-modal";
import "./CdpModal.scss";
import CdpTable from "../CdpTable/CdpTable";
import { withRouter } from "react-router-dom";

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
      review_list: [
        {
          id: 1,
          category: "frontend",
          career: "신입",
          mood: "긍정적",
          route: "온라인 지원",
          test_level: 3,
          result: "합격",
          review:
            "편안한 분위기였고 딱딱하지 않았다. 한시간 면접. 다양한 질문들로 말을 많이 했던 기억.",
          question:
            "경력중심의 자기소개 회사에 궁금한점 꿈 또는 목표 이전직장 퇴사 이유",
          answer: "이력서에 작성한대로 대답 왜 퇴사했는지에 대해서 대답"
        },
        {
          id: 2,
          category: "backend",
          career: "1~3년차",
          mood: "부정적",
          route: "지인 추천",
          test_level: 5,
          result: "대기중",
          review:
            "최근 브이씨로 회사명을 바꾸고 역삼으로 본사 이전. 생각보다 많은 면접관이 들어와서 놀랐음. 지원자의 포트폴리오는 아직 안 봤지만 우리 회사에 지원했으니 자기 회사에 대해 설명해 보라는 질문이 인상적. 형제 자매, 누구와 함께 사는지 등의 사적인 질문이 있었음.",
          question:
            "이직 이유, 회사를 볼 때 가장 중요하게 여기는 것, 남들이 보는 성격, 골프에 대해 아는지, 우리 회사에 대해 설명해 봐라, 마케팅이란 무엇인가, 가장 성과를 낸 프로젝트는, 우리가 왜 당신을 뽑아야 하는지.",
          answer:
            "경험과 사실에 기반하여 답변. 이곳에서 정말 일하고 싶다면 회사에 대한 정보를 타 회사보다 더 꼼꼼하게 보고 가야할 듯. 분위기가 다소 무겁고 살짝 압박 면접이라 당황스러울 수 있음."
        }
      ]
    };
  }

  handlePost = () => {
    fetch("http://10.58.7.182:8001/repl", {
      method: "post",
      headers: {
        Authorization: window.localStorage.JsonWebToken
      },
      body: JSON.stringify({
        category: this.state.category_value,
        career: this.state.career_year_value,
        mood: this.state.interview_experience_value,
        route: this.state.interview_path_value,
        result: this.state.interview_result_value,
        test_level: this.state.code_test_level_value,
        question: this.state.question,
        answer: this.state.answer,
        review: this.state.overall_review,
        company_name: this.props.companyData.company_name
      })
    })
      .then(response => response.json())
      .then(res => {
        // this.setState({ review_list: this.state.review_list.concat(res) });
        console.log(res);

        this.props.setReviewList([
          {
            category: this.state.category_value,
            career: this.state.career_year_value,
            mood: this.state.interview_experience_value,
            route: this.state.interview_path_value,
            result: this.state.interview_result_value,
            test_level: this.state.code_test_level_value,
            question: this.state.question,
            answer: this.state.answer,
            review: this.state.overall_review,
            company_name: this.props.companyData.company_name
          }
        ]);
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
    console.log(
      this.state.category_value,
      this.state.code_test_level_value,
      this.state.interview_path_value,
      this.state.interview_experience_value,
      this.state.overall_review,
      this.state.question,
      this.state.answer,
      this.state.interview_result_value,
      this.state.career_year_value,
      this.props.companyData.company_name
    );
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

export default withRouter(CdpModal);
