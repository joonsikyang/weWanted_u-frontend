import React, { Component } from "react";
import NavBarLogo from "../../Logo/NavBarLogo";
import "./HomePageFooter.scss";

export class HomePageFooter extends Component {
  render() {
    return (
      <div className="homepage-footer">
        <div className="footer-container">
          <div className="logo-comp-name">
            <NavBarLogo />
            <div className="comp-name">WeWanted</div>
          </div>
          <p className="info">
            (주)위원티드랩 (대표이사:양준식) | 서울특별시 강남구 테헤란로 427
            위워크타워 | 개인정보보호관리자 : 유병민 | 통신판매번호 :
            2016-서울강남-00207
            <br />
            유료직업소개사업등록번호 : (국내) 제2019-3220163-14-5-00001호 |
            (국외) F1201020170007 | 사업자등록번호 : 299-86-00022
            <br />
            서비스 및 기업문의 02-111-1111
            <br />© weWantedUlab, Inc.
          </p>
        </div>
      </div>
    );
  }
}

export default HomePageFooter;
