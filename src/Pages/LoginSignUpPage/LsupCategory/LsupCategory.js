import React, { Component } from "react";
import "./LsupCategory.scss";
export class LsupCategory extends Component {
  render() {
    return (
      <div className="buttons">
        <button className="front_end_btn">FrontEnd</button>
        <button className="back_end_btn">BackEnd</button>
        <button className="full_stack_btn">FullStack</button>
      </div>
    );
  }
}

export default LsupCategory;
