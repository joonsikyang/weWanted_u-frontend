import React, { Component } from "react";
import "./CompanyListPageNavBar.scss";
import { withRouter } from "react-router-dom";
import NavBarLogo from "../../Logo/NavBarLogo";
import { LoginModal } from "../../Modal/LoginModal/LoginModal";

export class CompanyListPageNavBar extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  goToHome = () => {
    this.props.history.push("/");
  };

  goToCompanyList = () => {
    this.props.history.push("/company_list?category=3");
  };

  goToMyAccount = () => {
    this.props.history.push("/my_account");
  };

  goToMakePortfolio = () => {
    this.props.history.push("/make_portfolio");
  };

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
      <div className="CLP-navBar">
        <div className="btn-container">
          <div className="left">
            <NavBarLogo />
            <div onClick={this.goToHome} className="logo_btn">
              WeWanted
            </div>
          </div>
          <div className="right">
            <div onClick={this.goToCompanyList} className="companyList">
              Company List
            </div>
            <div onClick={this.goToMyAccount} className="my-account">
              My Account
            </div>
            <div className="make-portfolio" onClick={this.goToMakePortfolio}>
              Make Porfolio
            </div>
            <div
              className={
                window.localStorage.getItem("JsonWebToken")
                  ? "login-signup none"
                  : "login-signup block"
              }
              onClick={this.handleOpenModal}
            >
              Login/Signup
            </div>
            <LoginModal
              isOpen={this.state.showModal}
              onClick={this.handleCloseModal}
            />
            <div
              className={
                window.localStorage.getItem("JsonWebToken")
                  ? "logout block"
                  : "logout none"
              }
            >
              Logout
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CompanyListPageNavBar);
