import React, { Component } from "react";
import "./CdpReviewBox.scss";

export class CdpReviewBox extends Component {
  render() {
    return (
      <div className="review_box">
        <span className="user">Frontend | 1년차</span>
        <article className="content_box">
          <div className="left_box"></div>
          <div className="right_box"></div>
        </article>
      </div>
    );
  }
}

export default CdpReviewBox;
