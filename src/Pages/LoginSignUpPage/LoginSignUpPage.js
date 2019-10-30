import React, { Component } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import LsupWelcome from "./LsupWelcome";
import LsupCategory from "./LsupCategory";
// import LsupFeature from "./LsupFeature";
import "./LoginSignUpPage.scss";

export class LoginSignUpPage extends Component {
  render() {
    return (
      <div className="login-signup-page">
        <NavBar />
        <LsupWelcome />
        <LsupCategory />
        {/* <LsupFeature /> */}
        {/* <div className="login_signup_container">
          <div className="login_container">Login</div>
          <div className="signup_container">SignUp</div>
        </div>
        <div className="logo_list">Company Logo List</div>
        <div className="footer">Footer</div> */}
      </div>
    );
  }
}

export default LoginSignUpPage;
