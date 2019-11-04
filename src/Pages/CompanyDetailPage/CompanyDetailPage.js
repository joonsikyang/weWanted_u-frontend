import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./CompanyDetailPage.scss";
import "Styles/Reset.scss";
import CompanyListPageNavBar from "Components/NavBar/CompanyListPageNavBar";
import { detailImgData } from "./CdpPositionData";
import CdpPosition from "./CdpPosition/CdpPosition";
import MapContainer from "../../Components/MapContainer";
import CdpDetailIntro from "./CdpDetailIntro";
import CdpInterview from "./CdpInterview";
import HomePageFooter from "Components/Footer/HomePageFooter";

export class CompanyDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positionData: {},
      companyData: {},
      detailData: detailImgData,
      detailSwitch: true
    };
  }

  detailHandler = () => {
    this.setState({
      detailSwitch: true
    });
  };

  interviewHandler = () => {
    this.setState({
      detailSwitch: false
    });
  };

  componentDidMount() {
    fetch("http://10.58.5.27:8000/job/detail/1")
      .then(res => res.json())
      .then(res => {
        this.setState({
          positionData: res.job,
          companyData: res.company
        });
      });
  }

  render() {
    const { companyData, detailSwitch } = this.state;
    return (
      <div>
        <CompanyListPageNavBar />
        <main className="cdp_main">
          <div className="main_left">
            <div
              style={{ backgroundImage: `url(${companyData.main_image})` }}
              className="main_image"
            ></div>
            <div className="choice_box">
              <div
                className={`choice${detailSwitch ? "" : "_false"}`}
                onClick={this.detailHandler}
              >
                회사 소개
              </div>
              <div
                className={`choice${detailSwitch ? "_false" : ""}`}
                onClick={this.interviewHandler}
              >
                면접 정보
              </div>
            </div>
            {detailSwitch ? <CdpDetailIntro /> : <CdpInterview />}
          </div>
          <aside className="main_right">
            <div className="logo_and_name">
              <div
                style={{
                  backgroundImage: `url(${companyData.logo_image})`
                }}
                className="logo"
              ></div>
              <div className="company_name">{companyData.company_name}</div>
            </div>
            <CdpPosition />
            <button>팔로우하기</button>
            <MapContainer />
          </aside>
        </main>
        <HomePageFooter />
      </div>
    );
  }
}

export default withRouter(CompanyDetailPage);
