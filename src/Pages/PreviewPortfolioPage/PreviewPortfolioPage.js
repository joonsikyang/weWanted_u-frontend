import React from "react";
import { withRouter } from "react-router-dom";
import PppHeader from "./PppHeader";
import PppProjects from "./PppProjects";
import "./PreviewPortfolioPage.scss";

class PreviewPortfolioPage extends React.Component {
  constructor() {
    super();

    this.state = {
      /* eslint-disable */
      completed: "false",
      title: `반갑습니다,
저희는 weWanted 입니다.`,
      phone: "010-1111-1111",
      email: "weWantYouSoBadly@gmail.com",
      blog: "https://github.com/hmhm2292/react-westagram",
      about_me: `현재 서울에서 4년차 웹 프론트엔드 엔지니어로 일하고 있으며 아름다운 인터페이스와 애니메이션을 구현하는 것을 즐깁니다. 
개발자의 가치는 비즈니스 가치를 구현하는데서 나온다고 믿습니다. 주도적으로 업무를 진행할 수 있는 환경을 선호합니다.`,
      projects: [
        {
          project_title: "비바리퍼블리카",
          github: "https://github.com/hmhm2292/react-westagram",
          description:
            "Growth Silo(Team)에서 토스의 성장에 필요한 웹페이지들을 개발하고 있습니다. (업데이트 예정)",
          what_did_i_do: `-프론트엔드 기술환경 구성 및 기본 기능 구현
-MobX, MobX State Tree를 사용한 스토어 디자인
-React기반 컴포넌트 계층 구조 디자인
-스토리북을 이용한 컴포넌트 기반 개발 도입
-Jest 기반의 테스트 작성`,
          tech_stack: "TypeScript, React, MobX, Sass, Jest, Next.js, Native"
        },
        {
          project_title: "스튜디오씨드 코리아",
          github: "https://github.com/hmhm2292/react-westagram",
          description:
            "ProtoPie Studio와 연동되는 ProtoPie Cloud의 엔터프라이즈 버전의 프론트엔드 인터페이스를 개발했습니다. 프론트엔드 부분은 혼자 맡아 진행했으며, 3월 경에 1차적으로 릴리즈가 완료되어 여러 기업에 납품되었습니다.",
          what_did_i_do: `-프론트엔드 기술환경 구성 및 기본 기능 구현
-MobX, MobX State Tree를 사용한 스토어 디자인
-React기반 컴포넌트 계층 구조 디자인
-스토리북을 이용한 컴포넌트 기반 개발 도입
-Jest 기반의 테스트 작성`,
          tech_stack:
            "TypeScript, React, MobX, styled-components, Storybook, Jest, React Router, GitLab, GitLab CI, Docker"
        }
      ]
    };
    /* eslint-enable */
  }

  render() {
    const myProjectList = this.state.projects.map((project, i) => (
      <PppProjects
        key={i}
        project_title={project.project_title}
        github={project.github}
        description={project.description}
        what_did_i_do={project.what_did_i_do}
        tech_stack={project.tech_stack}
      />
    ));
    return (
      <>
        <div className="ppp_top_bar"></div>
        <div className="preview_portfolio_page">
          <div className="ppp_container">
            <PppHeader
              title={this.state.title}
              phone={this.state.phone}
              email={this.state.email}
              blog={this.state.blog}
              about_me={this.state.about_me}
            />
            <div className="ppp_divider"></div>
            <div className="ppp_projects_title_bar">
              <div className="ppp_projects_title">Projects</div>
            </div>
            <div className="ppp_projects_container">
              <ul className="ppp_projects_list_container">{myProjectList}</ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(PreviewPortfolioPage);
