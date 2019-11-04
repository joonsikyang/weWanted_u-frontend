import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./CompanyListPage.scss";
import ClpCategory from "./ClpCategory";
import ClpSkills from "./ClpSkills";
import ClpFilter from "./ClpFilter";
import ClpCompany from "./ClpCompany";
import CompanyListPageNavBar from "../../Components/NavBar/CompanyListPageNavBar/CompanyListPageNavBar";

export class CompanyListPage extends Component {
  goToDetail = () => {
    this.props.history.push("/company_detail");
  };

  render() {
    return (
      <div className="company_list_page">
        <CompanyListPageNavBar />
        <div className="filterArea">
          <ClpCategory />
          <ClpSkills />
        </div>
        <div className="filter_companyList_container">
          <ClpFilter />
          <ClpCompany onClick={this.goToDetail} />
        </div>
      </div>
    );
  }
}

export default withRouter(CompanyListPage);
