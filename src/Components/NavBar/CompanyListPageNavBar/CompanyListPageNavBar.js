import React, { Component } from "react";
import "./CompanyListPageNavBar.scss";

export class CompanyListPageNavBar extends Component {
  render() {
    return (
      <div className="CLP-navBar">
        <div className="btn-container">
          <div className="left">
            {/* <NavBarLogo /> */}
            <div className="logo_btn">WeWanted</div>
          </div>
          <div className="right">
            {/* <div className="search-button" onClick={this.handleSearchOpenModal}> */}
            <div className="search-button">Search</div>
            {/* <SearchModal
              isOpen={this.state.showSearchModal}
              onClick={this.handleSearchCloseModal}
            /> */}
            <div className="vertical-line"></div>
            <div className="my-account">My Account</div>
            <div className="make-portfolio">Make Porfolio</div>
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

export default CompanyListPageNavBar;
