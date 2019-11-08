import React, { Component } from "react";
import "./HomepageNavBar.scss";
import LoginModal from "../../Modal/LoginModal";
import NavBarLogo from "../../Logo/NavBarLogo";

export class HomepageNavBar extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      showSearchModal: false
    };
  }

  handleOpenModal = e => {
    this.setState({
      showModal: true
    });
  };

  handleCloseModal = e => {
    this.setState({
      showModal: false
    });
  };

  render() {
    return (
      <div className="homepage-navBar">
        <div className="btn-container">
          <div className="left">
            <NavBarLogo />
            <div className="logo_btn">WeWanted</div>
          </div>
          <div className="right">
            <div
              className={
                window.localStorage.getItem("JsonWebToken")
                  ? "login-signup none"
                  : "login-signup block"
              }
              onClick={this.handleOpenModal}
            >
              Login | Signup
            </div>
            <div
              className={
                window.localStorage.getItem("JsonWebToken")
                  ? "logout block"
                  : "logout none"
              }
            >
              Logout
            </div>
            <LoginModal
              isOpen={this.state.showModal}
              onClick={this.handleCloseModal}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default HomepageNavBar;
