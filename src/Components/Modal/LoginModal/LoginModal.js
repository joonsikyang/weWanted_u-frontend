import React, { Component } from "react";
import ReactModal from "react-modal";
import "./LoginModal.scss";
import "./LoginMode/LoginMode.scss";
import { withRouter } from "react-router-dom";
import LoginMode from "./LoginMode";
import SignupMode from "./SignupMode";

export class LoginModal extends Component {
  constructor() {
    super();
    this.state = {
      loginMode: true
    };
  }

  handleSignupMode = e => {
    this.setState({
      loginMode: !this.state.loginMode
    });
  };

  handleBackBtn = e => {
    this.setState({
      loginMode: true
    });
  };

  render() {
    const { loginMode } = this.state; // destructuring
    return (
      <ReactModal
        className="loginModal"
        isOpen={this.props.isOpen}
        contentLabel="login"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.4)"
          },
          content: {
            outline: "none"
          }
        }}
      >
        <div className="header-container">
          <div
            className={`${
              this.state.loginMode ? "back-btn none" : "back-btn block"
            }`}
            onClick={this.handleBackBtn}
          >
            Back
          </div>
          <div className="login-header">WeWanted</div>
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
          {/* 바뀌는 부분 */}
          {loginMode ? <LoginMode /> : <SignupMode />}
          {/* 바뀌는 부분 */}
          <div className="signup-area">
            <div
              className={`${
                this.state.loginMode
                  ? "signup-btn-container block"
                  : "signup-btn-container none"
              }`}
            >
              <div className="signup" onClick={this.handleSignupMode}>
                아직 회원이 아니신가요?
              </div>
            </div>
          </div>
        </div>
      </ReactModal>
    );
  }
}
export default withRouter(LoginModal);
