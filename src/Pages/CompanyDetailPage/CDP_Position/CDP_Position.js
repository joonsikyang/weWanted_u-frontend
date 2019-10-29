import React, { Component } from "react";
import "./CDP_Position.scss";
import CDP_PositionData from "./CDP_PositionData";

class CDP_Position extends Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       data: CDP_PositionData
  //     };
  //   }

  render() {
    return (
      <a className="CDP_PositionContainer">
        <h4>Application Product Manager 어플 매니저</h4>
        <h5>채용보상금 1,000,000원</h5>
        <p>2020.01.24 까지</p>
      </a>
    );
  }
}

export default CDP_Position;
