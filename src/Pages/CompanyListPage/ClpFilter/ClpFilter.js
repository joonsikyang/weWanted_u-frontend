import React, { Component } from "react";
import "./ClpFilter.scss";

export class ClpFilter extends Component {
  render() {
    return (
      <div className="filter_container">
        <div className="filter_left">
          <div className="filter_item">
            <div className="filter_item_title">Filter1</div>
          </div>
          <div className="filter_item">
            <div className="filter_item_title">Filter2</div>
          </div>
          <div className="filter_item">
            <div className="filter_item_title">Filter3</div>
          </div>
          <div className="filter_item">
            <div className="filter_item_title">Filter4</div>
          </div>
        </div>
        <div className="filter_right">
          <div className="filter_btn">
            <div>FilterBtn</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClpFilter;
