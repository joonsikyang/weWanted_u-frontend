import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./CompanyListPage.scss";
import CompanyListPageNavBar from "Components/NavBar/CompanyListPageNavBar";
import ClpCategory from "./ClpCategory";
import ClpFilter from "./ClpFilter";
import ClpCompany from "./ClpCompany";
import Slick from "./Slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class CompanyListPage extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount = () => {
    this.fetchCompany();
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.location.search.split("=")[1] !==
      this.props.location.search.split("=")[1]
    ) {
      this.fetchCompany();
    }
  }

  fetchCompany() {
    const queryId = this.props.location.search.split("=")[1];
    console.log(queryId);
    fetch(`http://10.58.7.182:8000/job/job_list/${queryId}`)
      .then(response => response.json())
      .then(response => {
        this.setState({
          data: response.data
        });
      });
  }

  render() {
    console.log(this.props);
    return (
      <div className="company_list_page">
        <CompanyListPageNavBar />
        <div className="filterArea">
          <ClpCategory onClick={this.handleCategoryClick} />
          <Slick fetchedData={this.state.data} />
        </div>
        <div className="filter_companyList_container">
          <ClpFilter />
          <ClpCompany fetchedData={this.state.data} />
        </div>
      </div>
    );
  }
}

export default withRouter(CompanyListPage);
