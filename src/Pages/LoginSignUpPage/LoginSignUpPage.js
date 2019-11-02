import React, { Component } from "react";
import NavBar from "../../Components/NavBar/HomepageNavBar";
import LsupWelcome from "./LsupWelcome";
import LsupCategory from "./LsupCategory";
import "./LoginSignUpPage.scss";
import HomePageFooter from "../../Components/Footer/HomePageFooter/HomePageFooter";

export class LoginSignUpPage extends Component {
  render() {
    return (
      <div className="login-signup-page">
        <NavBar />
        <LsupWelcome />
        <LsupCategory />
        <HomePageFooter />
      </div>
    );
  }
}

export default LoginSignUpPage;
