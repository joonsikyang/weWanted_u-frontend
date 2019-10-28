import React from "react";
import { withRouter } from "react-router-dom";
// import NavBar from "../../Components/NavBar";
import "../../Styles/Reset.scss";

const MainPage = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <div>hello world</div>
      <button>FrontEnd</button>
      <button>BackEnd</button>
      <button>FullStack</button>
      <div>Footer</div>
    </div>
  );
};

export default withRouter(MainPage);
