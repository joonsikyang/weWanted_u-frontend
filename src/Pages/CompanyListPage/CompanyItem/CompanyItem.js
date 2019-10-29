import React, { Component } from "react";

export class CompanyItem extends Component {
  render() {
    return (
      <li className="CLP_companyList_item">
        <div className="CLP_companyList_likes_container">
          <div className="CLP_companyList_likes">likes</div>
        </div>
        <header>
          <div></div>
        </header>
        <body>
          <div className="position">{this.props.position}</div>
          <div className="companyName">{this.props.companyName}</div>
          <div className="companyPlace">{this.props.companyPlace}</div>
        </body>
      </li>
    );
  }
}

export default CompanyItem;
