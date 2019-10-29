import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="F_Container">
        <div className="F_Logo_CompName">
          <div className="F_Logo"></div>
          <div className="F_CompName">weWantedU</div>
        </div>
        <p className="F_Info">
          (주)YJS (대표이사:weWantedU) | 서울특별시 강남구 테헤란로 427
          위워크타워 | 개인정보보호관리자 : 유병민 | 통신판매번호 :
          2016-서울강남-00207 유료직업소개사업등록번호 : (국내)
          제2019-1111111-14-5-00001호 | (국외) F1111111111 | 사업자등록번호 :
          111-11-22222 서비스 및 기업문의 02-111-1111 © weWantedUlab, Inc.
        </p>
      </div>
    </div>
  );
};

export default Footer;
