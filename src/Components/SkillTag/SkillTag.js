import React from "react";
import "./SkillTag.scss";

const SkillTag = props => {
  return <li className="skill_tag">{props.skill}</li>;
};

export default SkillTag;
