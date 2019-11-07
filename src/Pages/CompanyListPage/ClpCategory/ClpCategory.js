import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import "./ClpCategory.scss";

export class ClpCategory extends Component {
  render() {
    return (
      <div className="category">
        <div className="category_container">
          <Link to="/company_list?category=1" className="category_item front">
            <div>FrontEnd</div>
          </Link>
          <Link to="/company_list?category=2" className="category_item back">
            <div>BackEnd</div>
          </Link>
          <Link to="/company_list?category=3" className="category_item full">
            <div>FullStack</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(ClpCategory);
