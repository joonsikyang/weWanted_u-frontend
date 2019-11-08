import React from "react";
import { withRouter } from "react-router-dom";
import PppHeader from "./PppHeader";
import PppProjects from "./PppProjects";
import "./PreviewPortfolioPage.scss";

class PreviewPortfolioPage extends React.Component {
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
    fetch(`http://10.58.7.182:8001/resume/${this.props.match.params.id}`, {
      method: "get",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6IndlY29kZUBuYXZlci5jb20ifQ.fJay4OFcWhqdx3qBy0TV9U4iSxXn8IDNthJPqsrl1wE"
      }
    })
      .then(response => response.json())
      .then(response => {
        this.setState({ ...response.resume[0] });
        console.log(response);
      });
  };

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
