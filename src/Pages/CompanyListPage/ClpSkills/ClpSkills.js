import React, { Component } from "react";
import SkillsItem from "./SkillsItem/SkillsItem";
import Skills_DATA from "./SkillsItem/Skills_DATA";
import "./ClpSkills.scss";
// import left from "../../../images/left1.png";
// import right from "../../../images/right1.jpeg";

export class ClpSkills extends Component {
  render() {
    const skillsList = Skills_DATA.map(stack => (
      <SkillsItem key={stack.id} title={stack.skill} />
    ));

    return (
      <div className="clp-skills">
        <div className="contents-container">
          <div className="left">
            <div className="left-btn">{"<"}</div>
            {/* <img className="left-btn" src={left} alt="left" /> */}
          </div>
          <div className="skills_container">{skillsList}</div>
          <div className="right">
            <div className="right-btn">{">"}</div>
            {/* <img className="right-btn" src={right} alt="right" /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default ClpSkills;
