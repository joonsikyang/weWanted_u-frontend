import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginSignUpPage from "Pages/LoginSignUpPage";
import CompanyListPage from "Pages/CompanyListPage";
import MakePortfolioPage from "Pages/MakePortfolioPage";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LoginSignUpPage} />
          <Route exact path="/company_list" component={CompanyListPage} />
          <Route exact path="/make_portfolio" component={MakePortfolioPage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
