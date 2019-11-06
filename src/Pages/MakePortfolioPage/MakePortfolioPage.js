import React from "react";
import CompanyListPageNavBar from "Components/NavBar/CompanyListPageNavBar";
import { withRouter } from "react-router-dom";
import "./MakePortfolioPage.scss";
import MppHeader from "./MppHeader";
import MppProjects from "./MppProjects";
import MppPreviewModal from "./MppPreviewModal";

class MakePortfolioPage extends React.Component {
  constructor() {
    super();
    this.state = {
      show_modal: false,
      completed: "",
      title: "",
      phone: "",
      email: "",
      blog: "",
      about_me: "",
      projects: [
        {
          project_title: "",
          github: "",
          description: "",
          what_did_i_do: "",
          tech_stack: ""
        }
      ]
    };
  }

  componentDidMount = () => {
    this.setState({
      completed: "false",
      title: `반갑습니다modal,\n저희는 weWanted 입니다.`,
      phone: "010-test-1111",
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
          what_did_i_do:
            "-프론트엔드 기술환경 구성 및 기본 기능 구현\n-MobX, MobX State Tree를 사용한 스토어 디자인\n-React기반 컴포넌트 계층 구조 디자인",
          tech_stack: "TypeScript, React, MobX, Sass, Jest, Next.js, Native"
        },
        {
          project_title: "스튜디오씨드 코리아",
          github: "https://github.com/hmhm2292/react-westagram",
          description:
            "ProtoPie Studio와 연동되는 ProtoPie Cloud의 엔터프라이즈 버전의 프론트엔드 인터페이스를 개발했습니다. 프론트엔드 부분은 혼자 맡아 진행했으며, 3월 경에 1차적으로 릴리즈가 완료되어 여러 기업에 납품되었습니다.",
          what_did_i_do:
            "-프론트엔드 기술환경 구성 및 기본 기능 구현\n-MobX, MobX State Tree를 사용한 스토어 디자인\n-React기반 컴포넌트 계층 구조 디자인",
          tech_stack:
            "TypeScript, React, MobX, styled-components, Storybook, Jest, React Router, GitLab, GitLab CI, Docker"
        }
      ]
    });
  };

  handleProjectsOnChange = (event, index) => {
    let copyProjectsState = [...this.state.projects];
    console.log(copyProjectsState);
    copyProjectsState[index][event.target.name] = event.target.value;
    this.setState({ projects: copyProjectsState });
  };

  handleHeaderOnChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onClickAddProject = () => {
    let copyProjectsState = [...this.state.projects];
    copyProjectsState.push({
      project_title: "",
      github: "",
      description: "",
      what_did_i_do: "",
      tech_stack: ""
    });
    this.setState({ projects: copyProjectsState });
  };

  onClickRemoveProject = index => {
    let copyProjectsState = [...this.state.projects];
    copyProjectsState.splice(index, 1);
    this.setState({ projects: copyProjectsState });
  };

  onClickSaveProject = event => {
    if (event.target.name === "save") {
      this.setState({ completed: "In Progress" });
    }
  };

  onClickCompletedProject = event => {
    if (event.target.name === "completed") {
      this.setState({ completed: "Completed" });
    }
  };

  onClickShowPreview = event => {
    if (event.target.name === "preview") {
      this.setState({ show_modal: true });
    }
  };

  onClickCloseModal = () => {
    this.setState({ show_modal: false });
  };

  render() {
    const myProjectList = this.state.projects.map((project, i) => (
      <MppProjects
        key={i}
        id={i}
        handleProjectsOnChange={this.handleProjectsOnChange}
        project_title={project.project_title}
        github={project.github}
        description={project.description}
        what_did_i_do={project.what_did_i_do}
        tech_stack={project.tech_stack}
        onClickRemoveProject={this.onClickRemoveProject}
      />
    ));
    return (
      <>
        <div className="make_portfolio_page">
          <CompanyListPageNavBar />
          <div className="mpp_container">
            <MppHeader
              handleHeaderOnChange={this.handleHeaderOnChange}
              title={this.state.title}
              phone={this.state.phone}
              email={this.state.email}
              blog={this.state.blog}
              about_me={this.state.about_me}
            />

            <div className="projects_title_bar">
              <div className="projects_title">Projects</div>
              <button onClick={this.onClickAddProject} className="add_btn">
                + Project
              </button>
            </div>
            <div className="mpp_projects_container">
              <ul className="projects_list_container">{myProjectList}</ul>
            </div>
            <div className="btn_group">
              <button
                onClick={this.onClickCompletedProject}
                name="completed"
                className="completed_btn"
              >
                Completed
              </button>
              <button
                onClick={this.onClickSaveProject}
                name="save"
                className="save_btn"
              >
                Save
              </button>
              <button
                onClick={this.onClickShowPreview}
                name="preview"
                className="preview_btn"
              >
                Preview
              </button>
            </div>
            <MppPreviewModal
              title={this.state.title}
              phone={this.state.phone}
              email={this.state.email}
              blog={this.state.blog}
              about_me={this.state.about_me}
              projects={this.state.projects}
              show_modal={this.state.show_modal}
              onClickCloseModal={this.onClickCloseModal}
            />
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(MakePortfolioPage);
