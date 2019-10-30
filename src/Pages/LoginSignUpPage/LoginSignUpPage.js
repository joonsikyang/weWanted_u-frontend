import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./LoginSignUpPage.scss";

export class LoginSignUpPage extends Component {
  render() {
    return (
      <div>
        <div className="LSUP_topLine">topLine</div>
        <div className="LSUP_title">weWanted_U</div>
        <div className="LSUP_loginSignUpContainer">
          <div className="LSUP_login">Login</div>
          <div className="LSUP_signUp">SignUp</div>
        </div>
        <div className="LSUP_bottomLine">bottomLine</div>
      </div>
    );
  }
}

export default withRouter(LoginSignUpPage);
