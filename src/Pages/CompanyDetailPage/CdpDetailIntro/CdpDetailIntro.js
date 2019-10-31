import React, { Component } from "react";
import "./CdpDetailIntro.scss";
import {
  CdpPositionData,
  CdpCompanyInfoData,
  Skills_DATA
} from "../CdpPositionData";
import SkillTag from "Components/SkillTag";

export class CdpDetailIntro extends Component {
  constructor() {
    super();
    this.state = {
      positionData: CdpPositionData,
      companyData: CdpCompanyInfoData
    };
  }
  render() {
    const { positionData, companyData } = this.state;
    return (
      <div style={{ display: this.props.display }} className="name_container">
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
    );
  }
}

export default CdpDetailIntro;
