import React, { Component } from "react";
import CompanyItem from "./CompanyItem/CompanyItem";
import { CdpCompanyInfoData } from "./CompanyItem/Company_DATA";
import "./ClpCompany.scss";

export class ClpCompany extends Component {
  render() {
    const companyList = CdpCompanyInfoData.map(company => (
      <CompanyItem
        key={company.id}
        img={company.img}
        positionName={company.positionName}
        companyName={company.companyName}
        city={company.city}
        country={company.country}
        deadLine={company.deadLine}
        onClick={this.props.onClick}
      />
    ));

    return <ul className="companyList_container">{companyList}</ul>;
  }
}

export default ClpCompany;
