import React, { Component } from "react";
import "./HomepageNavBar.scss";

export class HomepageNavBar extends Component {
  render() {
    return (
      <div className="homepage-navBar">
        <div className="btn-container">
          <div className="left">
            <div className="logo_btn">WeWanted</div>
          </div>
          <div className="right">
            <div className="search-button">Search</div>
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
