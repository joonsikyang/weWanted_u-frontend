import React, { Component } from "react";

export class CompanyItem extends Component {
  render() {
    return (
      <li className="company_list_item">
        {/* <div className="follow_container">
          <div className="company_follow">likes</div>
        </div> */}
        <header>
          <div style={{ backgroundImage: this.props.img }}></div>
        </header>
        <div className="item_bottom">
          <div className="position">{this.props.positionName}</div>
          <div className="company_name">{this.props.companyName}</div>
          <div className="company_place">
            <span className="company_city">{this.props.city}</span>
            <span>•</span>
            <span className="company_country">{this.props.country}</span>
          </div>
          <div className="company_deadline">
            <span>{this.props.deadLine}</span>
          </div>
        </div>
      </li>
    );
  }
}

export default CompanyItem;
