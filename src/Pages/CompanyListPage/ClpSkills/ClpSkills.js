import React, { Component } from "react";
import SkillsItem from "./SkillsItem/SkillsItem";
import Skills_DATA from "./SkillsItem/Skills_DATA";
import "./ClpSkills.scss";

export class ClpSkills extends Component {
  render() {
    const skillsList = Skills_DATA.map(stack => (
      <SkillsItem key={stack.id} title={stack.skill} />
    ));

    return <div className="skills_container">{skillsList}</div>;
  }
}

export default ClpSkills;
