import React, { Component } from "react";
import "./CompanyItem.scss";
import { withRouter, Link } from "react-router-dom";
import "./CompanyItem.scss";

export class CompanyItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      follow: false
    };
  }

  sendToken = e => {
    e.preventDefault();
    console.log("send");

    this.sendFollowingFetch();
  };

  sendFollowingFetch = () => {
    fetch("http://10.58.7.182:8001/follow", {
      method: "post",
      headers: {
        Authorization: window.localStorage.JsonWebToken
      },
      body: JSON.stringify({
        job_id: this.props.jobId,
        follow: !this.state.follow
      })
    })
      .then(response => response.json())
      .then(response => {
        console.log(response.message);
        this.setState({ follow: !this.state.follow });
      });
  };

  render() {
    return (
      <Link to={`/company_detail/${this.props.jobId}`}>
        {/* {console.log(this.props.follow)} */}
        <li className="company_list_item">
          <header>
            <div
              className="image"
              style={{ backgroundImage: `url(${this.props.img})` }}
            ></div>
            <div
              className={
                this.state.follow
                  ? "follow-container true"
                  : "follow-container false"
              }
              onClick={this.sendToken}
            >
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
