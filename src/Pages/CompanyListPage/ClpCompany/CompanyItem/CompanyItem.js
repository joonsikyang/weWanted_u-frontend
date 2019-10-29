import React, { Component } from "react";

export class CompanyItem extends Component {
  render() {
    return (
      <li className="company_list_item">
        <div className="follow_container">
          <div className="company_follow">likes</div>
        </div>
        <header>
          <div></div>
        </header>
        <body>
          <div className="position">{this.props.position}</div>
          <div className="company_name">{this.props.companyName}</div>
          <div className="company_place">{this.props.companyPlace}</div>
        </body>
      </li>
    );
  }
}

export default CompanyItem;
