import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CompanyDetailPage from "Pages/CompanyDetailPage";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={CompanyDetailPage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
