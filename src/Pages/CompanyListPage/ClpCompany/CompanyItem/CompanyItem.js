import React, { Component } from "react";
import "./CompanyItem.scss";
import { withRouter, Link } from "react-router-dom";
import "./CompanyItem.scss";

export class CompanyItem extends Component {
  constructor() {
    super();
    this.state = {
      follow: false
    };
  }

  sendToken = e => {
    e.preventDefault();
    console.log("send");
    this.setState({ follow: !this.state.follow });
    fetch("http://10.58.7.182:8001/follow", {
      method: "post",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6IjEyMjMzQHouY29tIn0.YbQFaoF9lE6eTWbzT_nfmrEg7kcFbNGRlMgPXA3EXP4"
      },
      body: JSON.stringify({
        job_id: 1,
        follow: !this.state.followState
      })
    })
      .then(response => response.json())
      .then(res => console.log(res));
  };

  render() {
    return (
      <Link to={`/company_detail/${this.props.jobId}`}>
        <li className="company_list_item">
          <header>
            <div
              className="image"
              style={{ backgroundImage: `url(${this.props.img})` }}
            ></div>
            <div
              className={
                // if(this.props.follow)
                this.state.follow
                  ? "follow-container true"
                  : "follow-container false"
              }
              // onClick={(this.sendToken, e => e.stopPropagation())}
              onClick={this.sendToken}
            >
              {/* <span>Follow</span> */}
              <span>{this.state.follow ? "Following" : "+ Follow"}</span>
            </div>
          </header>
          <div className="item_bottom">
            <div className="position">{this.props.positionName}</div>
            <div className="company_name">{this.props.companyName}</div>
            <div className="company_place">
              <span className="company_city">{this.props.city}</span>
              <span className="dot">•</span>
              <span className="company_country">{this.props.country}</span>
            </div>
            <div className="company_deadline">
              <span>{this.props.deadLine ? this.props.deadLine : "상시"}</span>
            </div>
          </div>
        </li>
      </Link>
    );
  }
}

export default withRouter(CompanyItem);
