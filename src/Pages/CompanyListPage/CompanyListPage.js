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
      data: [],
      skillData: []
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
    const token = window.localStorage.JsonWebToken;
    fetch(`http://10.58.7.182:8001/job/list/${queryId}`, {
      headers: { Authorization: token }
    })
      .then(response => response.json())
      .then(response => {
        console.log(response.data[0].follow);
        this.setState({
          data: response.data,
          skillData: response.tag_list
        });
      });
  }

  render() {
    // console.log(this.state.data);
    // console.log(window.localStorage);
    return (
      <div className="company_list_page">
        <CompanyListPageNavBar />
        <div className="filterArea">
          <ClpCategory onClick={this.handleCategoryClick} />
          <Slick fetchedData={this.state.skillData} />
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
