import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CompanyDetailPage from "Pages/CompanyDetailPage";
import LoginSignUpPage from "Pages/LoginSignUpPage";
import CompanyListPage from "Pages/CompanyListPage";
import MainPage from "Pages/MainPage";
import MakePortfolioPage from "Pages/MakePortfolioPage";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/company_detail_page"
            component={CompanyDetailPage}
          />
          <Route exact path="/" component={MainPage} />
          <Route exact path="/company_list_page" component={CompanyListPage} />
          <Route exact path="/login_signup" component={LoginSignUpPage} />
          <Route exact path="/make_portfolio" component={MakePortfolioPage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
