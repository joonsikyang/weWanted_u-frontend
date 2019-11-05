import React, { Component } from "react";
import SkillsItem from "./SkillsItem/SkillsItem";
import Skills_DATA from "./SkillsItem/Skills_DATA";
import "./ClpSkills.scss";

export class ClpSkills extends Component {
  render() {
    const skillsList = Skills_DATA.map(stack => (
      <SkillsItem key={stack.id} title={stack.skill} />
    ));

    return (
      <div className="clp-skills">
        <div className="contents-container">
          <div className="left">
            <div className="left-btn" onClick={this.handleLeft}>
              {"<"}
            </div>
          </div>
          <div className="skills_container">{skillsList}</div>
          <div className="right">
            <div className="right-btn" onClick={this.handleRight}>
              {">"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClpSkills;
