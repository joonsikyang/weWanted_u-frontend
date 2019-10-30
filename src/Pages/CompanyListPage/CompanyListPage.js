import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./CompanyListPage.scss";
import ClpCategory from "./ClpCategory";
import ClpSkills from "./ClpSkills";
import ClpFilter from "./ClpFilter";
import ClpCompany from "./ClpCompany";

export class CompanyListPage extends Component {
  render() {
    return (
      <div className="company_list_page">
        <div className="nav">weWantedU</div>
        <div className="filterArea">
          <ClpCategory />
          <ClpSkills />
        </div>
        <div className="filter_companyList_container">
          <ClpFilter />
          <ClpCompany />
        </div>
      </div>
    );
  }
}

export default withRouter(CompanyListPage);
