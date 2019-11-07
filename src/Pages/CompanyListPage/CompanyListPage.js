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
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchCompany();
    }
  }

  fetchCompany() {
    fetch(`http://10.58.0.253:8000/job/job_list/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(response => {
        this.setState({
          data: response.data
        });
      });
  }

  render() {
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
