import React from "react";
import "./CdpDetailIntro.scss";
import SkillTag from "Components/SkillTag";
import MapContainer from "Components/MapContainer";

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
      <div className="bottom_responsive">
        <MapContainer
          companyData={props.companyData}
          width="100%"
          height="300px"
          className="bottom_map"
          display="none"
        />
        <div className="cdp_position">
          <div className="position_box">
            <h4>{props.positionData.position}</h4>
            <h5>
              {props.companyData.city} - {props.companyData.country}
            </h5>
            <p>
              마감일:
              {props.positionData.dead_line
                ? props.positionData.dead_line
                : "상시 채용"}
            </p>
          </div>
          <div className="logo_and_name">
            <div
              style={{
                backgroundImage: `url(${props.companyData.logo_image})`
              }}
              className="logo"
            ></div>
            <div>
              <div className="company_name">
                {props.companyData.company_name}
              </div>
              <button
                onClick={props.sendToken}
                className={`follow_btn${props.follow ? "" : "_on"}`}
              >
                팔로우하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CdpDetailIntro;
