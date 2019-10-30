import React, { Component } from "react";
import "./CompanyDetailPage.scss";
import "../../Styles/Reset.scss";
import CdpSkillTag from "./CdpSkillTag";
import { Skills_DATA } from "./CdpPositionData";
import { CdpPositionData } from "./CdpPositionData";

export class CompanyDetailPage extends Component {
  constructor() {
    super();
    this.state = {
      data: CdpPositionData
    };
  }
  render() {
    const { data } = this.state;
    console.log({ data });
    return (
      <div>
        <main className="cdp_main">
          <div className="main_left">
            <div className="detail_image"></div>
            <div className="name_container">
              <h2>프론트엔드 Engineer(JavaScript)</h2>
              <div className="name_and_location">
                <h3>브레이브모바일(숨고,Soomgo)</h3>
                <span className="location">서울 - 한국</span>
              </div>
              <ul>
                {Skills_DATA.map(e => (
                  <CdpSkillTag skill={e.skill} />
                ))}
              </ul>
              <p>
                <span>{data.intro}</span>
                <h6>주요 업무</h6>
                <span>{data.main_tasks}</span>
                <h6>자격 요건</h6>
                <span>{data.requirements}</span>
                <h6>우대 사항</h6>
                <span>{data.preferred_points}</span>
                <h6>혜택 및 복지</h6>
                <span>{data.benefits}</span>
              </p>
            </div>
          </div>
          <aside className="main_right">
            <h3>태그</h3>
            <div className="follow_container"></div>
          </aside>
        </main>
      </div>
    );
  }
}

export default CompanyDetailPage;
