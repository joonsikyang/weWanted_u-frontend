import React, { Component } from "react";
import CompanyItem from "./CompanyItem/CompanyItem";
import "./ClpCompany.scss";

export class ClpCompany extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch("http://10.58.5.27:8000/job/main/1")
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState({
          data: response.data
        });
      });
  }

  render() {
    const companyList = this.state.data.map((e, i) => (
      <CompanyItem
        key={i}
        img={e.company.main_image}
        positionName={e.job.position}
        companyName={e.company.company_name}
        city={e.company.city}
        country={e.company.country}
        // deadLine={e.company.deadLine}
      />
    ));
    return <ul className="companyList_container">{companyList}</ul>;
  }
}

export default ClpCompany;
