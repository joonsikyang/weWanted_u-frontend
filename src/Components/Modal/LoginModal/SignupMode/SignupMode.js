import React, { Component } from "react";
import "./SignupMode.scss";
import { withRouter } from "react-router-dom";

export class SignupMode extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
      pwCheck: "",
      opacity: 0.3
    };
  }

  handleBtnColor = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      this.setState({
        opacity:
          this.state.id &&
          this.state.pw &&
          this.state.pwCheck &&
          this.state.pw === this.state.pwCheck
            ? 1
            : 0.3
      })
    );
  };

  render() {
    console.log(this.state.pw);
    console.log(this.state.pwCheck);
    return (
      <div className="signup-mode">
        <input
          className="id"
          type="text"
          placeholder="이메일을 입력해주세요"
          name="id"
          value={this.state.id}
          onChange={this.handleBtnColor}
        ></input>
        <input
          className="pw"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          name="pw"
          value={this.state.pw}
          onChange={this.handleBtnColor}
        ></input>
        <input
          className="pw-check"
          type="password"
          placeholder="비밀번호를 한번 더 입력해주세요"
          name="pwCheck"
          value={this.state.pwCheck}
          onChange={this.handleBtnColor}
        ></input>
        <div className="btn-container" style={{ opacity: this.state.opacity }}>
          <div className="signup">가입하기</div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupMode);
