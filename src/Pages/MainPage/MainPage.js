import React from "react";
import { withRouter } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import "./MainPage.scss";

const MainPage = () => {
  return (
    <div className="main_page">
      <NavBar />
      <div className="mp_container">
        <div className="background_image">
          <div className="buttons">
            <button className="front_end_btn">FrontEnd</button>
            <button className="back_end_btn">BackEnd</button>
            <button className="full_stack_btn">FullStack</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(MainPage);
