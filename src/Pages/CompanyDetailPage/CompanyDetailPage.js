import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./CompanyDetailPage.scss";
import "Styles/Reset.scss";
import CompanyListPageNavBar from "Components/NavBar/CompanyListPageNavBar";
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
      tagData: [],
      imageData: [],
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
    console.log(this.props);
    fetch(
      `http://10.58.4.168:8000/job/recruitment/${this.props.match.params.id}`
    )
      .then(res => res.json())
      .then(res => {
        this.setState({
          positionData: res.job,
          companyData: res.company,
          tagData: res.tags,
          imageData: res.company_images
        });
      });
  }

  render() {
    const {
      companyData,
      positionData,
      tagData,
      imageData,
      detailSwitch
    } = this.state;
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
            {detailSwitch ? (
              <CdpDetailIntro
                companyData={companyData}
                positionData={positionData}
                tagData={tagData}
              />
            ) : (
              <CdpInterview
                companyData={companyData}
                positionData={positionData}
                tagData={tagData}
              />
            )}
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
            <CdpPosition
              companyData={companyData}
              positionData={positionData}
            />
            <button>팔로우하기</button>
            <MapContainer companyData={companyData} />
          </aside>
        </main>
        <HomePageFooter />
      </div>
    );
  }
}

export default withRouter(CompanyDetailPage);
