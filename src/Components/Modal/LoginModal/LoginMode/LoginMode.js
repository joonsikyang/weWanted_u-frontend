import React, { Component } from "react";
import "./LoginMode.scss";
import { withRouter } from "react-router-dom";

export class LoginMode extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
      opacity: 0.3
    };
  }

  handleBtnColor = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      this.setState({
        opacity: this.state.id && this.state.pw ? 1 : 0.3
      })
    );
  };

  handleLogin = e => {
    if (this.state.id && this.state.pw) {
      this.props.history.push("/company_list");
    }
  };
  render() {
    return (
      <>
        <div className="login-area">
          <input
            className="email-input"
            type="text"
            placeholder="이메일을 입력해주세요"
            name="id"
            value={this.state.id}
            onChange={this.handleBtnColor}
          ></input>
          <input
            className="pw-input"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            name="pw"
            value={this.state.pw}
            onChange={this.handleBtnColor}
          ></input>
          <div
            className="login-btn-container"
            onClick={this.handleLogin}
            style={{ opacity: this.state.opacity }}
          >
            <div className="login">Login</div>
          </div>
        </div>
        <div className="or-container">
          <div className="line-between"></div>
          <div className="or">or</div>
          <div className="line-between"></div>
        </div>
      </>
    );
  }
}

export default withRouter(LoginMode);