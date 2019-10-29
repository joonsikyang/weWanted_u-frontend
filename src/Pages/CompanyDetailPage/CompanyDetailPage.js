import React, { Component } from "react";
import "./CompanyDetailPage.scss";
import "../../Styles/Reset.scss";
import CDP_CompanyHeader from "./CDP_CompanyHeader";
import CDP_Position from "./CDP_Position";

export class CompanyDetailPage extends Component {
  render() {
    return (
      <div>
        <CDP_CompanyHeader />
        <main className="CDP_Main">
          <div className="CDP_mainLeft">
            <h3 className="title">채용 중인 포지션</h3>
            <CDP_Position />
            <CDP_Position />
            <CDP_Position />
            <CDP_Position />
            <CDP_Position />
          </div>
          <div className="CDP_mainRight">
            <h3>태그</h3>
          </div>
        </main>
      </div>
    );
  }
}

export default CompanyDetailPage;
