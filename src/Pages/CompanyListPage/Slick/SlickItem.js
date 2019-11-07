import React, { Component } from "react";

export class SlickItem extends Component {
  render() {
    return (
      <div className="skill-container">
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}

export default SlickItem;
