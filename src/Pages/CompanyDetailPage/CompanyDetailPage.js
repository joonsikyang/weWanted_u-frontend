import React, { Component } from "react";
import "./CompanyDetailPage.scss";
import "Styles/Reset.scss";
import SkillTag from "Components/SkillTag";
import { Skills_DATA } from "./CdpPositionData";
import { CdpPositionData } from "./CdpPositionData";
import NavBar from "Components/NavBar/NavBar";
import { CdpCompanyInfoData } from "./CdpPositionData";
import { detailImgData } from "./CdpPositionData";
import CdpPosition from "./CdpPosition/CdpPosition";
import MapContainer from "../../Components/MapContainer";

export class CompanyDetailPage extends Component {
  constructor() {
    super();
    this.state = {
      positionData: CdpPositionData,
      companyData: CdpCompanyInfoData,
      detailData: detailImgData
    };
  }
  render() {
    const { positionData, companyData, detailData } = this.state;
    console.log({ positionData });
    return (
      <div>
        <NavBar />
        <main className="cdp_main">
          <div className="main_left">
            <div className="detail_image"></div>
            <div className="name_container">
              <h2>{positionData.position_name}</h2>
              <div className="name_and_location">
                <h3>{companyData.name}</h3>
                <span className="location">
                  {companyData.location} - {companyData.country}
                </span>
              </div>
              <ul>
                {Skills_DATA.map(e => (
                  <SkillTag skill={e.skill} />
                ))}
              </ul>
              <p>
                <span>{positionData.intro}</span>
                <h6>주요 업무</h6>
                <span>{positionData.main_tasks}</span>
                <h6>자격 요건</h6>
                <span>{positionData.requirements}</span>
                <h6>우대 사항</h6>
                <span>{positionData.preferred_points}</span>
                <h6>혜택 및 복지</h6>
                <span>{positionData.benefits}</span>
              </p>
            </div>
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

export default CompanyDetailPage;
