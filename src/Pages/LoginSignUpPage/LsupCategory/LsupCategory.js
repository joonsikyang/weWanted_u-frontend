import React, { Component } from "react";
import "./LsupCategory.scss";
import LoginModal from "../../../Components/Modal/LoginModal";

export class LsupCategory extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  handleOpenModal = e => {
    this.setState({
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
          <div className="start-button">
            <div className="button-text" onClick={this.handleOpenModal}>
              지금 시작하기
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

export default LsupCategory;
