import React from "react";
import { withRouter } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import "./MainPage.scss";

const MainPage = () => {
  return (
    <div className="MainPage">
      <NavBar />
      <div className="MP_Container">
        <div className="MP_Background_Image">
          <div className="MP_Buttons">
            <button className="MP_FrontEnd_Btn">FrontEnd</button>
            <button className="MP_BackEnd_Btn">BackEnd</button>
            <button className="MP_FullStack_Btn">FullStack</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(MainPage);
