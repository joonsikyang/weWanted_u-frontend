import React, { Component } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import LsupWelcome from "./LsupWelcome";
import LsupCategory from "./LsupCategory";
// import LsupLoginSignup from "./LsupLoginSignup";
// import LsupFeature from "./LsupFeature";
import Footer from "../../Components/Footer";
import "./LoginSignUpPage.scss";

export class LoginSignUpPage extends Component {
  render() {
    return (
      <div className="login-signup-page">
        <NavBar />
        <LsupWelcome />
        <LsupCategory />
        {/* <LsupFeature /> */}
        {/* <LsupLoginSignup /> */}
        <Footer />
      </div>
    );
  }
}

export default LoginSignUpPage;
