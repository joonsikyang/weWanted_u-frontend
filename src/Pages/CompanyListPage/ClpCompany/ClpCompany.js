import React, { Component } from "react";
import CompanyItem from "./CompanyItem/CompanyItem";
import "./ClpCompany.scss";

export class ClpCompany extends Component {
  render() {
    const companyList = this.props.fetchedData.map((e, i) => (
      <CompanyItem
        key={i}
        img={e.company.main_image}
        positionName={e.job.position}
        companyName={e.company.company_name}
        city={e.company.city}
        country={e.company.country}
        deadLine={e.job.dead_line}
      />
    ));
    return <ul className="companyList_container">{companyList}</ul>;
  }
}

export default ClpCompany;
