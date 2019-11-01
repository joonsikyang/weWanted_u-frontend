import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./CompanyDetailPage.scss";
import "Styles/Reset.scss";
import { CdpPositionData } from "./CdpPositionData";
import NavBar from "Components/NavBar/NavBar";
import { CdpCompanyInfoData } from "./CdpPositionData";
import { detailImgData } from "./CdpPositionData";
import CdpPosition from "./CdpPosition/CdpPosition";
import MapContainer from "../../Components/MapContainer";
import CdpDetailIntro from "./CdpDetailIntro";
import CdpInterview from "./CdpInterview";

export class CompanyDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positionData: CdpPositionData,
      companyData: CdpCompanyInfoData,
      detailData: detailImgData,
      detailSwitch: true
    };
    console.log(props);
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

  render() {
    const { companyData, detailSwitch } = this.state;
    return (
      <div>
        <NavBar />
        <main className="cdp_main">
          <div className="main_left">
            <div className="detail_image"></div>
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
                  backgroundImage: companyData.logo_img
                }}
                className="logo"
              ></div>
              <div className="company_name">{companyData.name}</div>
            </div>
            <CdpPosition />
            <button>팔로우하기</button>
            <MapContainer />
          </aside>
        </main>
      </div>
    );
  }
}

export default withRouter(CompanyDetailPage);
