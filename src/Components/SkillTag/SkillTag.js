import React from "react";
import "./SkillTag.scss";

const SkillTag = props => {
  return (
    <li key={props.tag_id} className="skill_tag">
      {props.skill}
    </li>
  );
};

export default SkillTag;
