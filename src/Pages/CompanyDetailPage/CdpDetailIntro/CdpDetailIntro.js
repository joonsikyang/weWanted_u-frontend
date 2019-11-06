import React from "react";
import "./CdpDetailIntro.scss";
import SkillTag from "Components/SkillTag";

const CdpDetailIntro = props => {
  return (
    <div className="name_container">
      <h2>{props.positionData.position}</h2>
      <div className="name_and_location">
        <h3>{props.companyData.company_name}</h3>
        <span className="location">
          {props.companyData.city} - {props.companyData.country}
        </span>
      </div>
      <ul>
        {props.tagData.map(e => (
          <SkillTag tag_id={e.tag_id} skill={e.skill} />
        ))}
      </ul>
      <div className="pTag">
        <span>{props.positionData.intro}</span>
        <div>주요 업무</div>
        <span>{props.positionData.main_tasks}</span>
        <div>자격 요건</div>
        <span>{props.positionData.requirements}</span>
        <div>우대 사항</div>
        <span>{props.positionData.preferred_points}</span>
        <div>혜택 및 복지</div>
        <span>{props.positionData.benefits}</span>
      </div>
    </div>
  );
};

export default CdpDetailIntro;
