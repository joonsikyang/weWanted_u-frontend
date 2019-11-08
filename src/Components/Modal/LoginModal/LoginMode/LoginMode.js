import React, { Component } from "react";
import "./LoginMode.scss";
import { withRouter } from "react-router-dom";

export class LoginMode extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
      opacity: 0.3,
      display: "none"
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

  enterPress = e => {
    if (e.keyCode === 13) {
      this.loginAccess();
    }
  };

  loginAccess = () => {
    fetch("http://10.58.7.182:8001/users/auth", {
      method: "post",
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw
      })
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(res);
        if (res.JsonWebToken) {
          localStorage.setItem("JsonWebToken", res.JsonWebToken);
          this.props.history.push("/company_list?category=3");
        } else if (res.message === "INVALID_EMAIL") {
          this.setState({ display: "block" });
        }
      });
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
            onKeyDown={this.enterPress}
          ></input>
          <div
            className="error-msg-container"
            style={{ display: this.state.display }}
          >
            <div className="error-msg">ID/PW를 확인해주세요</div>
          </div>
          <div
            className="login-btn-container"
            onClick={this.loginAccess}
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
