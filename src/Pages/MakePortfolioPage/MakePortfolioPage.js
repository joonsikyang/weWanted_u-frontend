import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import { withRouter } from "react-router-dom";
import "./MakePortfolioPage.scss";
import MppHeader from "./MppHeader";
import MppProjects from "./MppProjects";

class MakePortfolioPage extends React.Component {
  constructor() {
    super();
    this.state = {
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

  handleProjectsOnChange = (event, index) => {
    let copyProjectsState = [...this.state.projects];
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

  render() {
    console.log(this.state);
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
          <NavBar />
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
              <button className="save_btn">Save</button>
              <button className="preview_btn">Preview</button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default withRouter(MakePortfolioPage);
