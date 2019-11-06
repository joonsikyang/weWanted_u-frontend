import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./CompanyListPage.scss";
import ClpCategory from "./ClpCategory";
import ClpFilter from "./ClpFilter";
import ClpCompany from "./ClpCompany";
import CompanyListPageNavBar from "../../Components/NavBar/CompanyListPageNavBar/CompanyListPageNavBar";
import Slick from "./Slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class CompanyListPage extends Component {
  constructor() {
    super();
    this.state = {
      pageId: 3,
      data: []
    };
  }

  componentDidMount = () => {
    fetch(`http://10.58.0.253:8000/job/job_list/3`)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({
          data: response.data
        });
      }, this.props.history.push(`/company_list/3`));
  };

  handleCategoryClick = id => {
    fetch(`http://10.58.0.253:8000/job/job_list/${id}`)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({
          data: response.data
        });
      }, this.props.history.push(`/company_list/${id}`));
  };

  render() {
    console.log(this.state.data);

    return (
      <div className="company_list_page">
        <CompanyListPageNavBar />
        <div className="filterArea">
          <ClpCategory onClick={this.handleCategoryClick} />
          <Slick />
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

// key={i}
// img={e.company.main_image}
// positionName={e.job.position}
// companyName={e.company.company_name}
// city={e.company.city}
// country={e.company.country}
// deadLine={e.job.dead_line}
