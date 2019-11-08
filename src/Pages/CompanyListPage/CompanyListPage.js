import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./CompanyListPage.scss";
import CompanyListPageNavBar from "Components/NavBar/CompanyListPageNavBar";
import ClpCategory from "./ClpCategory";
import ClpFilter from "./ClpFilter";
import CompanyItem from "./ClpCompany/CompanyItem/CompanyItem";
import Slick from "./Slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoadingPage from "../LoadingPage";

export class CompanyListPage extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      skillData: [],
      isLoading: false
    };
  }

  componentDidMount = () => {
    this.fetchCompany();
    this.setState({
      isLoading: true
    });
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
        console.log(response);
        this.setState({
          isLoading: false,
          data: response.data,
          skillData: response.tag_list
        });
      });
  }

  render() {
    console.log(this.state);
    const loading = this.state.isLoading ? (
      <LoadingPage />
    ) : (
      this.state.data.map((e, i) => (
        <CompanyItem
          key={i}
          idx={i}
          img={e.company.main_image}
          positionName={e.job.position}
          companyName={e.company.company_name}
          city={e.company.city}
          country={e.company.country}
          deadLine={e.job.dead_line}
          jobId={e.job.job_id}
          follow={e.follow}
          refetch={this.fetchCompany}
        />
      ))
    );
    return (
      <div className="company_list_page">
        <CompanyListPageNavBar />
        <div className="filterArea">
          <ClpCategory onClick={this.handleCategoryClick} />
          <Slick fetchedData={this.state.skillData} />
        </div>
        <div className="filter_companyList_container">
          <ClpFilter />
          {loading}
        </div>
      </div>
    );
  }
}

export default withRouter(CompanyListPage);
