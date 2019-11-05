import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./ClpCategory.scss";

export class ClpCategory extends Component {
  render() {
    return (
      <div className="category">
        <div className="category_container">
          <div
            onClick={() => this.props.onClick(1)}
            className="category_item front"
          >
            <div className="category_item_title">FrontEnd</div>
          </div>
          <div
            onClick={() => this.props.onClick(2)}
            className="category_item back"
          >
            <div className="category_item_title">BackEnd</div>
          </div>
          <div
            onClick={() => this.props.onClick(3)}
            className="category_item full"
          >
            <div className="category_item_title">FullStack</div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ClpCategory);
