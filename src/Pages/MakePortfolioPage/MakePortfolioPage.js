import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import { withRouter } from "react-router-dom";
import "./MakePortfolioPage.scss";
import MppHeader from "./MppHeader";
import MppExperience from "./MppExperience";

const MakePortfolioPage = () => {
  return (
    <div className="make_portfolio_page">
      <NavBar />
      <form className="mpp_container">
        <MppHeader />
        <MppExperience />
        <button>Save Portfolio</button>
      </form>

      <Footer />
    </div>
  );
};

export default withRouter(MakePortfolioPage);
