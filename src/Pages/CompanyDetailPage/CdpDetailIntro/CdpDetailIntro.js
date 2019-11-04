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
      positionData: {},
      companyData: {},
      data: []
    };
  }

  componentDidMount() {
    fetch("http://10.58.5.27:8000/job/detail/1")
      .then(res => res.json())
      .then(res => {
        this.setState(
          {
            positionData: res.job,
            companyData: res.company
          },
          console.log(res.job)
        );
      });
  }

  render() {
    const { positionData, companyData } = this.state;
    return (
      <div className="name_container">
        <h2>{positionData.position}</h2>
        <div className="name_and_location">
          <h3>{companyData.company_name}</h3>
          <span className="location">
            {companyData.city} - {companyData.country}
          </span>
        </div>
        <ul>
          {Skills_DATA.map(e => (
            <SkillTag skill={e.skill} />
          ))}
        </ul>
        <p>
          <span>{positionData.intro}</span>
          <div>주요 업무</div>
          <span>{positionData.main_tasks}</span>
          <div>자격 요건</div>
          <span>{positionData.requirements}</span>
          <div>우대 사항</div>
          <span>{positionData.preferred_points}</span>
          <div>혜택 및 복지</div>
          <span>{positionData.benefits}</span>
        </p>
      </div>
    );
  }
}

export default CdpDetailIntro;
