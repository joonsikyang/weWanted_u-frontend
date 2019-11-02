import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginSignUpPage from "Pages/LoginSignUpPage";
import CompanyListPage from "Pages/CompanyListPage";
import MainPage from "Pages/MainPage";
import MakePortfolioPage from "Pages/MakePortfolioPage";
import PreviewPortfolioPage from "./Pages/PreviewPortfolioPage/PreviewPortfolioPage";
import MyAccountPage from "./Pages/MyAccountPage";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/company_list_page" component={CompanyListPage} />
          <Route exact path="/login_signup" component={LoginSignUpPage} />
          <Route exact path="/my_account" component={MyAccountPage} />
          <Route exact path="/make_portfolio" component={MakePortfolioPage} />
          <Route
            exact
            path="/preview_portfolio"
            component={PreviewPortfolioPage}
          />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
