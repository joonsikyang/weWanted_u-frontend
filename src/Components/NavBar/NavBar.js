import React from "react";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="nav_bar">
      <div className="left">
        <button className="logo_btn">weWantedU</button>
      </div>
      <div className="right">
        <button className="my_account_btn">My Account</button>
        <button className="make_portfolio_btn">My Porfolio</button>
        <button className="log_out_btn">Log out</button>
      </div>
    </div>
  );
};

export default NavBar;
