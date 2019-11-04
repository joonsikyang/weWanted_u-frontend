import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CompanyDetailPage from "Pages/CompanyDetailPage";
import LoginSignUpPage from "Pages/LoginSignUpPage";
import CompanyListPage from "Pages/CompanyListPage";
import MakePortfolioPage from "Pages/MakePortfolioPage";
import PreviewPortfolioPage from "./Pages/PreviewPortfolioPage";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LoginSignUpPage} />
          <Route exact path="/company_list" component={CompanyListPage} />          
          <Route exactpath="/company_detail" component={CompanyDetailPage} />
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
