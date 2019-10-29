import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./Pages/Home";
// import Signup from "./Pages/Signup";
// import LoginSignUpPage from "./Pages/LoginSignUpPage/LoginSignUpPage"
import LoginSignUpPage from "./Pages/LoginSignUpPage";
import CompanyListPage from "./Pages/CompanyListPage";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={CompanyListPage} />
          <Route exact path="/login_signup" component={LoginSignUpPage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
