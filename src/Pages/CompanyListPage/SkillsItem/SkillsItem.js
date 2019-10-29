import React, { Component } from "react";

export class SkillsItem extends Component {
  render() {
    return (
      <div className="CLP_skills_item">
        <div className="CLP_skills_item_title">{this.props.title}</div>
      </div>
    );
  }
}

export default SkillsItem;
