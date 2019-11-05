import React from "react";
import { withRouter } from "react-router-dom";
import "./ErrorPage.scss";
import CompanyListPageNavBar from "../../Components/NavBar/CompanyListPageNavBar";
import HomePageFooter from "../../Components/Footer/HomePageFooter";

class ErrorPage extends React.Component {
  handleBack = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="error_page">
        <CompanyListPageNavBar />
        <div className="error_page_container">
          <div className="error_title_container">
            <div className="error_title">404 Error</div>
            <div className="error_icon"></div>
          </div>
          <div className="error_message">
            요청하신 페이지를 찾을 수 없습니다.
            <br />
            입력하신 주소가 정확한지 다시 한번 확인해주세요
          </div>
          <button onClick={this.handleBack} className="go_back_btn">
            이전 페이지로 돌아가기
          </button>
          <div className="go_back_image"></div>
        </div>
        <HomePageFooter />
      </div>
    );
  }
}

export default withRouter(ErrorPage);
