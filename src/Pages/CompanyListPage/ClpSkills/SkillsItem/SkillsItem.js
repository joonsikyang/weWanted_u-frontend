import React, { Component } from "react";

export class SkillsItem extends Component {
  render() {
    return (
      <div className="skills_item">
        <div className="skills_item_title">{this.props.title}</div>
      </div>
    );
  }
}

export default SkillsItem;