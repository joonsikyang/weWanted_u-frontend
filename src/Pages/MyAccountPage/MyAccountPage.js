import React from "react";
import { withRouter } from "react-router-dom";
import CompanyListPageNavBar from "Components/NavBar/CompanyListPageNavBar";
import HomePageFooter from "Components/Footer/HomePageFooter";
import "./MyAccountPage.scss";
import "../../Styles/Reset.scss";
import MapMyPortfolio from "./MapMyPortfolioList";
import CompanyItem from "../CompanyListPage/ClpCompany/CompanyItem/CompanyItem";

class MyAccountPage extends React.Component {
  constructor() {
    super();
    this.state = {
      portfolio: [],
      job_list: []
    };
  }

  componentDidMount = () => {
    this.fetchResumeList();
    this.fetchFollowedJobList();
  };

  fetchResumeList = () => {
    fetch(`http://10.58.7.182:8001/resume`, {
      method: "get",
      headers: {
        Authorization: window.localStorage.JsonWebToken
      }
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({ portfolio: response.resume_list });
      });
  };

  fetchFollowedJobList = () => {
    fetch(`http://10.58.7.182:8001/job/my_account`, {
      method: "get",
      headers: {
        Authorization: window.localStorage.JsonWebToken
      }
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({ job_list: response.data });
      });
  };

  OnClickGoToMakePortfolio = () => {
    this.props.history.push("/make_portfolio");
  };

  render() {
    const portfolioList = this.state.portfolio.map((eachPortfolio, i) => (
      <MapMyPortfolio
        key={i}
        title={eachPortfolio.title}
        dateCreated={eachPortfolio.created_at.slice(0, 10)}
        completed={eachPortfolio.saving_type}
        portfolioId={eachPortfolio.id}
      />
    ));

    const companyList = this.state.job_list.map((e, i) => (
      <CompanyItem
        key={i}
        img={e.company.main_image}
        positionName={e.job.position}
        companyName={e.company.company_name}
        city={e.company.city}
        country={e.company.country}
        deadLine={e.job.dead_line}
        jobId={e.job.job_id}
        follow={e.follow}
        refetch={this.props.refetch}
      />
    ));

    return (
      <div className="my_account_page">
        <CompanyListPageNavBar />
        <div className="account_page_container">
          <a href="https://wecode.co.kr/" className="wecode_advertisement">
            <div className="wecode_ad_statement">
              월가 출신 15년차 개발자가 알려준다! 3달만에 개발자가 되세요
              >wecode
            </div>
          </a>
          <div className="my_job_list">
            <div className="job_list_title">Job List</div>
            {companyList}
          </div>
          <div className="my_portfolio_list">
            <div className="portfolio_list_title">Portfolio List</div>
            <button
              onClick={this.OnClickGoToMakePortfolio.bind(this)}
              className="create_new_portfolio_btn"
            >
              New Portfolio
            </button>
            <div className="portfolio_list_container">{portfolioList}</div>
          </div>
        </div>
        <HomePageFooter />
      </div>
    );
  }
}
export default withRouter(MyAccountPage);
