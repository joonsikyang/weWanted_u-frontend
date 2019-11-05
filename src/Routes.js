import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CompanyDetailPage from "Pages/CompanyDetailPage";
import LoginSignUpPage from "Pages/LoginSignUpPage";
import CompanyListPage from "Pages/CompanyListPage";
import MakePortfolioPage from "Pages/MakePortfolioPage";
import MyAccountPage from "./Pages/MyAccountPage";
import PreviewPortfolioPage from "./Pages/PreviewPortfolioPage";
<<<<<<< HEAD
import LoadingPage from "./Pages/LoadingPage";
=======
import ErrorPage from "./Pages/ErrorPage";
>>>>>>> b60651d9d39043556fb8bdc81f7976e7054ec601

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LoginSignUpPage} />
          <Route exact path="/my_account" component={MyAccountPage} />
          <Route exact path="/company_list" component={CompanyListPage} />
          <Route exact path="/make_portfolio" component={MakePortfolioPage} />
          <Route
            exact
            path="/preview_portfolio"
            component={PreviewPortfolioPage}
          />
          <Route exact path="/company_detail" component={CompanyDetailPage} />
          <Route exact path="/loading" component={LoadingPage} />
          <Route exact path="/error_page" component={ErrorPage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
