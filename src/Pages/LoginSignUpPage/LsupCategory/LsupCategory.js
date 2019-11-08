import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./LsupCategory.scss";
import LoginModal from "../../../Components/Modal/LoginModal";

export class LsupCategory extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  goToCompanyList = () => {
    this.props.history.push("/company_list?category=3");
  };

  handleOpenModal = e => {
    window.localStorage.JsonWebToken
      ? alert("이미 로그인하셨습니다.")
      : this.setState({
          showModal: true
        });
  };

  handleCloseModal = e => {
    this.setState({
      showModal: false
    });
  };

  render() {
    return (
      <div className="lsup-category">
        <div className="lsup-container">
          <div className="site-introduce">
            <div className="introduce-title">개발자에게 딱 맞는 회사 찾기</div>
            <div className="introduce-sub">
              오직 개발자만을 위한 편리한 스타트업 구직 사이트
            </div>
          </div>
          <div className="buttons">
            <button className="front_end_btn">FrontEnd</button>
            <button className="back_end_btn">BackEnd</button>
            <button className="full_stack_btn">FullStack</button>
          </div>
          <div className="btn-container">
            <div className="btn-box">
              <div className="search-button">
                <div className="button-text" onClick={this.goToCompanyList}>
                  탐색하기
                </div>
              </div>
              <div className="start-button" onClick={this.handleOpenModal}>
                <div className="button-text">시작하기</div>
              </div>
            </div>
          </div>
          <LoginModal
            isOpen={this.state.showModal}
            onClick={this.handleCloseModal}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(LsupCategory);
