import React from "react";
import "./LoginModal.scss";

const LoginModal = ({ isOpen, close }) => {
  return (
    <React.Fragment>
      {isOpen ? (
        <React.Fragment>
          <div className="loginModal-overlay" />
          <div className="loginModal">
            <div className="header-container">
              <div className="login-header">> WeWanted</div>
              <div className="close-btn" onClick={close}>
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
              <div className="input-area">
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
              </div>
              <div className="btn-area">
                <div className="login-btn-container">
                  <div className="login">Login</div>
                </div>
                <div className="line-between"></div>
                <div className="signup-btn-container">
                  <div className="signup">Signup</div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
};

export default LoginModal;
