import React from "react";
import ReactModal from "react-modal";
import "./CdpModal.scss";
import CdpTable from "../CdpTable/CdpTable";
import {
  category,
  career_year,
  interview_experience,
  interview_path,
  interview_result,
  code_test_level
} from "../CdpTable/CdpTableData";

class CdpModal extends React.Component {
  constructor() {
    super();
    this.state = {
      category,
      career_year,
      interview_experience,
      interview_path,
      interview_result,
      code_test_level,
      category_value: "frontend",
      career_year_value: "신입",
      interview_experience_value: "긍정적",
      interview_path_value: "지인 추천",
      interview_result_value: "합격",
      code_test_level_value: "없음",
      question: ""
    };
  }

  selectApi = () => {
    fetch("api")
      .then(res => res.json)
      .then(data => {
        this.setState({
          category: data.category,
          career_year: data.career_year,
          interview_experience: data.interview_experience,
          interview_path: data.interview_path,
          code_test_level: data.code_test_level
        });
      });
  };

  // handlepost = () => {
  //   fetch("api",{
  //     method: 'post'        body: JSON.stringify({
  //       email: this.props.email,
  //       password: this.props.password
  //       })
  //   })
  //   });
  // };

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

  render() {
    const {
      category,
      career_year,
      interview_experience,
      interview_path,
      interview_result,
      code_test_level,
      category_value,
      career_year_value,
      interview_experience_value,
      interview_path_value,
      interview_result_value,
      code_test_level_value
    } = this.state;
    const { handleSubmit } = this;
    console.log(this.state.question);

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
                category={category}
                career_year={career_year}
                interview_experience={interview_experience}
                interview_path={interview_path}
                interview_result={interview_result}
                code_test_level={code_test_level}
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
                <textarea placeholder=" 최대한 자세하게 작성해주세요."></textarea>
              </div>
              <div className="interview_review">
                <span>전체적인 면접 후기</span>
                <textarea placeholder=" 최대한 자세하게 작성해주세요."></textarea>
              </div>
            </div>
            <div className="modal_bottom">
              <div className="close" onClick={this.props.handleCloseModal}>
                취소
              </div>
              <div onClick={this.handlepost} className="completed">
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
