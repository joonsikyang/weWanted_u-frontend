import React, { Component } from "react";
import "./ClpCategory.scss";

export class ClpCategory extends Component {
  render() {
    return (
      <div className="category">
        <div className="category_container">
          <div
            className="category_item"
            style={{ backgroundColor: "rgba(57, 194, 159)" }}
          >
            <div className="category_item_title">FrontEnd</div>
          </div>
          <div
            className="category_item"
            style={{ backgroundColor: "rgba(61, 126, 255)" }}
          >
            <div className="category_item_title">BackEnd</div>
          </div>
          <div className="category_item" style={{ backgroundColor: "#3a68f9" }}>
            <div className="category_item_title">FullStack</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClpCategory;
