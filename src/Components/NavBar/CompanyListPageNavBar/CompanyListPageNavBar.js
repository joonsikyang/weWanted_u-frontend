import React, { Component } from "react";
import "./CompanyListPageNavBar.scss";
import { withRouter } from "react-router-dom";

export class CompanyListPageNavBar extends Component {
  goToMyAccount = () => {
    this.props.history.push("/my_account");
  };

  goToMakePortfolio = () => {
    this.props.history.push("/make_portfolio");
  };

  goToCompanyList = () => {
    this.props.history.push("/company_list?category=3");
  };

  render() {
    return (
      <div className="CLP-navBar">
        <div className="btn-container">
          <div className="left">
            {/* <NavBarLogo /> */}
            <div onClick={this.goToCompanyList} className="logo_btn">
              WeWanted
            </div>
          </div>
          <div className="right">
            {/* <div className="search-button" onClick={this.handleSearchOpenModal}> */}
            <div className="search-button">Search</div>
            {/* <SearchModal
              isOpen={this.state.showSearchModal}
              onClick={this.handleSearchCloseModal}
            /> */}
            <div className="vertical-line"></div>
            <div onClick={this.goToMyAccount} className="my-account">
              My Account
            </div>
            <div className="make-portfolio" onClick={this.goToMakePortfolio}>
              Make Porfolio
            </div>
            {/* <div className="login-signup" onClick={this.handleOpenModal}> */}
            <div className="login-signup">Login/Signup</div>
            <div className="logout">Logout</div>

            {/* <LoginModal
              isOpen={this.state.showModal}
              onClick={this.handleCloseModal}
            /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CompanyListPageNavBar);
