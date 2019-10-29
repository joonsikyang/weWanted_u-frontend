import React from "react";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="NB_Left">
        <button className="NB_Logo_Btn">weWantedU</button>
      </div>
      <div className="NB_Right">
        <button className="NB_MyAccount_Btn">My Account</button>
        <button className="NB_MakePortfolio_Btn">Make Porfolio</button>
        <button className="NB_LogOut_Btn">Log out</button>
      </div>
    </div>
  );
};

export default NavBar;
