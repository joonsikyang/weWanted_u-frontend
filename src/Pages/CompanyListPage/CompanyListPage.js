import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./CompanyListPage.scss";
import SkillsItem from "./SkillsItem/SkillsItem";
import CompanyItem from "./CompanyItem/CompanyItem";

export class CompanyListPage extends Component {
  render() {
    return (
      <div>
        <div className="nav">weWantedU</div>
        <div className="CLP_category">
          <div className="CLP_category_container">
            <div
              className="CLP_categoryItem"
              style={{ backgroundColor: "rgba(57, 194, 159)" }}
            >
              <div className="CLP_categoryItemTitle">FrontEnd</div>
            </div>
            <div
              className="CLP_categoryItem"
              style={{ backgroundColor: "rgba(61, 126, 255)" }}
            >
              <div className="CLP_categoryItemTitle">BackEnd</div>
            </div>
            <div
              className="CLP_categoryItem"
              style={{ backgroundColor: "#3a68f9" }}
            >
              <div className="CLP_categoryItemTitle">FullStack</div>
            </div>
          </div>
        </div>
        <div className="CLP_skills_container">
          <SkillsItem title="HTML" />
          <SkillsItem title="CSS" />
          <SkillsItem title="JavaScript" />
          <SkillsItem title="React" />
          <SkillsItem title="React Native" />
          <SkillsItem title="Redux" />
          <SkillsItem title="Typescript" />
          <SkillsItem title="Saas" />
          <SkillsItem title="Angular" />
          <SkillsItem title="Vue" />
          <SkillsItem title="Webpack" />
          <SkillsItem title="RxJS" />
          <SkillsItem title="Next.js" />
          <SkillsItem title="Electron" />
          <SkillsItem title="Node.js" />
        </div>
        <div className="CLP_filter_companyList_container">
          <div className="CLP_filter_container">
            <div className="CLP_filter_left_right">
              <div className="CLP_filter_item">
                <div className="CLP_filter_item_title">Filter1</div>
              </div>
              <div className="CLP_filter_item">
                <div className="CLP_filter_item_title">Filter2</div>
              </div>
              <div className="CLP_filter_item">
                <div className="CLP_filter_item_title">Filter3</div>
              </div>
              <div className="CLP_filter_item">
                <div className="CLP_filter_item_title">Filter4</div>
              </div>
            </div>
            <div className="CLP_filter_left_right">
              <div className="CLP_filter_btn">
                <div>FilterBtn</div>
              </div>
            </div>
          </div>
          <ul className="CLP_companyList_container">
            <CompanyItem
              position="프론트앤드 개발 담당"
              companyName="카카오아이엑스(KAKAO IX)"
              companyPlace="서울•한국"
            />
            <CompanyItem
              position="프론트앤드 (Web)개발자"
              companyName="힐링페이퍼(강남언니)"
              companyPlace="서울•한국"
            />
            <CompanyItem
              position="소프트웨어 엔지니어(Front-end, Back-end)"
              companyName="휴먼스케이프"
              companyPlace="서울•한국"
            />
            <CompanyItem
              position="Web Front-end Developer(웹 프론트엔드 개발자)"
              companyName="같다(gatda Corp)"
              companyPlace="서울•한국"
            />
            <CompanyItem
              position="캐시슬라이드 프론트엔드 엔지니어"
              companyName="엔비티(NBT)"
              companyPlace="서울•한국"
            />
            <CompanyItem
              position="Front-end 개발자"
              companyName="피플펀드컴퍼니(PeopleFundCompany)"
              companyPlace="서울•한국"
            />
            <CompanyItem
              position="iOS 개발"
              companyName="구하다"
              companyPlace="서울•한국"
            />
            <CompanyItem
              position="클라이언트 개발자(Flutter)"
              companyName="퍼플랩스(PurpleLabs)"
              companyPlace="서울•한국"
            />
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(CompanyListPage);
