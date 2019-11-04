import React from "react";
import { withRouter } from "react-router-dom";
import CompanyListPageNavBar from "Components/NavBar/CompanyListPageNavBar";
import "./MyAccountPage.scss";
import "../../Styles/Reset.scss";
import MapMyPortfolio from "./MapMyPortfolioList";
import CompanyItem from "../CompanyListPage/ClpCompany/CompanyItem/CompanyItem";
import { CdpCompanyInfoData } from "../CompanyListPage/ClpCompany/CompanyItem/Company_DATA";

class MyAccountPage extends React.Component {
  constructor() {
    super();
    this.state = {
      portfolio: [
        { title: "asdfa", date_created: "2019/02/22", completed: "Completed" },
        {
          title: "반갑습니다 저는 김형목입니다 잘부탁드립니다",
          date_created: "2019/02/22",
          completed: "In Progress"
        },
        {
          title: "asdfa",
          date_created: "2019/02/22",
          completed: "In Progress"
        },
        {
          title: "asdfa",
          date_created: "2019/02/22",
          completed: "In Progress"
        },
        { title: "asdfa", date_created: "2019/02/22", completed: "In Progress" }
      ],
      my_followed_comp_list: CdpCompanyInfoData
    };
  }

  OnClickGoToMakePortfolio = () => {
    this.props.history.push("/make_portfolio");
  };

  render() {
    const portfolioList = this.state.portfolio.map((eachPortfolio, i) => (
      <MapMyPortfolio
        key={i}
        title={eachPortfolio.title}
        dateCreated={eachPortfolio.date_created}
        completed={eachPortfolio.completed}
      />
    ));

    const companyList = this.state.my_followed_comp_list.map((e, i) => (
      <CompanyItem
        key={i}
        img={e.img}
        positionName={e.positionName}
        companyName={e.companyName}
        city={e.city}
        country={e.country}
        // deadLine={e.company.deadLine}
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
      </div>
    );
  }
}
export default withRouter(MyAccountPage);
