import React, { Component } from "react";
import SkillsItem from "./SkillsItem/SkillsItem";
import "./ClpSkills.scss";

export class ClpSkills extends Component {
  render() {
    return (
      <div className="skills_container">
        <SkillsItem title="HTML" />
        <SkillsItem title="CSS" />
        <SkillsItem title="JavaScript" />
        <SkillsItem title="React" />
        <SkillsItem title="React Native" />
        <SkillsItem title="Redux" />
        <SkillsItem title="Typescript" />
        <SkillsItem title="Saas" />
        <SkillsItem title="Angular" />
        <SkillsItem title="Vue" />
        <SkillsItem title="Webpack" />
        <SkillsItem title="RxJS" />
        <SkillsItem title="Next.js" />
        <SkillsItem title="Electron" />
        <SkillsItem title="Node.js" />
      </div>
    );
  }
}

export default ClpSkills;
