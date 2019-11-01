import React, { Component } from "react";
import "./HomepageNavBar.scss";
import SearchModal from "../../../Pages/LoginSignUpPage/LsupCategory/SearchModal";

export class HomepageNavBar extends Component {
  constructor() {
    super();
    this.state = {
      SearchModalOpen: false
    };
  }

  openSearchModal = e => {
    this.setState({
      SearchModalOpen: true
    });
  };

  closeSearchModal = e => {
    this.setState({
      SearchModalOpen: false
    });
  };

  render() {
    return (
      <div className="homepage-navBar">
        <div className="btn-container">
          <div className="left">
            <div className="logo_btn">WeWanted</div>
          </div>
          <div className="right">
            <div className="search-button" onClick={this.openSearchModal}>
              Search
            </div>
            <SearchModal
              open={this.state.SearchModalOpen}
              close={this.closeSearchModal}
            />
            <div className="vertical-line"></div>
            <div className="my_account_btn">My Account</div>
            <div className="make_portfolio_btn">Make Porfolio</div>
            <div className="log_out_btn">Logout</div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomepageNavBar;
