import React, { Component } from "react";
import "./HomepageNavBar.scss";
import LoginModal from "../../Modal/LoginModal";
import { SearchModal } from "../../Modal/SearchModal/SearchModal";
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

  handleSearchOpenModal = e => {
    this.setState({
      showSearchModal: true
    });
  };

  handleSearchCloseModal = e => {
    this.setState({
      showSearchModal: false
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
            <div className="search-button" onClick={this.handleSearchOpenModal}>
              Search
            </div>
            <SearchModal
              isOpen={this.state.showSearchModal}
              onClick={this.handleSearchCloseModal}
            />
            <div className="vertical-line"></div>
            <div className="login-signup" onClick={this.handleOpenModal}>
              Login/Signup
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
