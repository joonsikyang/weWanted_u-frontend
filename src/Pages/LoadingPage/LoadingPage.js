import React from "react";
import { withRouter } from "react-router-dom";
import "./LoadingPage.scss";

const LoadingPage = () => {
  return (
    <div className="loading_page">
      <div className="loading_graphic">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <div className="loading_text">Loading...</div>
    </div>
  );
};

export default withRouter(LoadingPage);
