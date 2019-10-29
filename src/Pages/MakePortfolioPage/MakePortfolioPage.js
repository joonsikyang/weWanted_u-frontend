import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import { withRouter } from "react-router-dom";
import "./MakePortfolioPage.scss";
import MppHeader from "./MppHeader";
import MppProjects from "./MppProjects";

const MakePortfolioPage = () => {
  return (
    <>
      <div className="make_portfolio_page">
        <NavBar />
        <form className="mpp_container">
          <MppHeader />
          <div className="mpp_projects_container">
            <div className="projects_title">Projects</div>
            <MppProjects />
            <MppProjects />
            <MppProjects />
            <MppProjects />
          </div>

          <button>Save Portfolio</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default withRouter(MakePortfolioPage);
