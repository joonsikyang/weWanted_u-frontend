import React, { Component } from "react";
import ReactModal from "react-modal";
import "./LoginModal.scss";

export class LoginModal extends Component {
  render() {
    return (
      <ReactModal
        className="loginModal"
        isOpen={this.props.isOpen}
        contentLabel="login"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.4)"
          }
        }}
      >
        <div className="header-container">
          <div className="login-header">> WeWanted</div>
          <div className="close-btn" onClick={this.props.onClick}>
            Close
          </div>
        </div>
        <div className="contents-container">
          <div className="title-container">
            <h1 className="title">간단한 절차로 취업 준비 끝!</h1>
            <h2 className="subtitle">
              개발자에게 딱 맞는 회사
              <br />
              위원티드에서 찾아보세요
            </h2>
          </div>
          <div className="login-area">
            <input
              className="email-input"
              type="text"
              placeholder="이메일을 입력해주세요"
            ></input>
            <input
              className="pw-input"
              type="password"
              placeholder="비밀번호를 입력해주세요"
            ></input>
            <div className="login-btn-container">
              <div className="login">Login</div>
            </div>
          </div>
          <div className="or-container">
            <div className="line-between"></div>
            <div className="or">or</div>
            <div className="line-between"></div>
          </div>
          <div className="signup-area">
            <div className="signup-btn-container">
              <div className="signup">Signup</div>
            </div>
          </div>
        </div>
      </ReactModal>
    );
  }
}
export default LoginModal;
