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
      completed_button: null,
      save_button: null,
      saving_type: null,
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
    // fetch(`http://10.58.0.62:8000/resume/savingtype`, {
    //   method: "get",
    //   headers: {
    //     Authorization:
    //       "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6IndlY29kZUBuYXZlci5jb20ifQ.fJay4OFcWhqdx3qBy0TV9U4iSxXn8IDNthJPqsrl1wE"
    //   }
    // })
    //   .then(response => response.json())
    //   .then(response => {
    //     console.log(response);
    this.setState({
      completed_button: 1,
      save_button: 2
      // completed_button: response.saving_types[0].id,
      // save_button: response.saving_types[1].id
    });
    // });
  };

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

  onClickPostProject = event => {
    console.log("buttonName:" + event.target.name);
    this.setState({ saving_type: event.target.name }, () => {
      this.postFetch(this.state.saving_type);
      // console.log(this.state);
    });
  };

  postFetch = saving_type => {
    console.log("savingType:" + saving_type);
    // let token = localStorage.getItem()
    //   fetch(`http://10.58.0.62:8000/resume/create/${saving_type}`, {
    //     method: "post",
    //     headers: {
    //       Authorization:
    //         "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6IndlY29kZUBuYXZlci5jb20ifQ.fJay4OFcWhqdx3qBy0TV9U4iSxXn8IDNthJPqsrl1wE"
    //     },
    //     body: JSON.stringify(this.state)
    //   })
    //     .then(response => response.json())
    //     .then(response => console.log(response));
    // };
  };

  // onClickCompletedProject = event => {
  //   if (event.target.name === "completed") {
  //     this.setState({ completed: "Completed" });
  //   }
  // };

  onClickShowPreview = event => {
    if (event.target.name === "preview") {
      this.setState({ show_modal: true });
    }
  };

  onClickCloseModal = () => {
    this.setState({ show_modal: false });
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
                onClick={this.onClickPostProject}
                name={this.state.completed_button}
                className="completed_btn"
              >
                Completed
              </button>
              <button
                onClick={this.onClickPostProject}
                name={this.state.save_button}
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
