import React, { Component } from "react";
import CompanyItem from "./CompanyItem/CompanyItem";
import "./ClpCompany.scss";

export class ClpCompany extends Component {
  render() {
    return (
      <ul className="companyList_container">
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
    );
  }
}

export default ClpCompany;
