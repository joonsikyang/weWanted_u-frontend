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
      portfolio: [
        {
          title: "",
          phone: "",
          email: "",
          blog: "",
          aboutMe: "",
          projects: [
            {
              projectTitle: "",
              github: "",
              description: "",
              whatDidIDo: "",
              techStack: ""
            }
          ]
        }
      ]
    };
  }

  handleOnChange = event => {
    let copyState = [...this.state.portfolio];
    if (
      [
        "projectTitle",
        "github",
        "description",
        "whatDidIDo",
        "techStack"
      ].includes(event.target.name)
    ) {
      copyState[0].projects[parseInt(event.target.id)][event.target.name] =
        event.target.value;
      this.setState({ copyState });
    } else {
      copyState[0][event.target.name] = event.target.value;
      this.setState({
        copyState
      });
    }
  };

  onClickAddProject = () => {
    let copyState = this.state.portfolio.slice();
    copyState[0].projects.push({
      projectTitle: "",
      github: "",
      description: "",
      whatDidIDo: "",
      techStack: ""
    });

    this.setState({ portfolio: copyState });
  };

  render() {
    console.log(this.state.portfolio);
    const myProjectList = this.state.portfolio[0].projects.map((project, i) => (
      <MppProjects
        key={i}
        id={i}
        handleOnChange={this.handleOnChange}
        projectTitle={project.projectTitle}
        github={project.github}
        description={project.description}
        whatDidIDo={project.whatDidIDo}
        techStack={project.techStack}
      />
    ));
    return (
      <>
        <div className="make_portfolio_page">
          <NavBar />
          <div className="mpp_container">
            <MppHeader
              handleOnChange={this.handleOnChange}
              title={this.state.title}
              phone={this.state.phone}
              email={this.state.email}
              blog={this.state.blog}
              aboutMe={this.state.aboutMe}
            />
            <div className="mpp_projects_container">
              <div className="projects_title">Projects</div>
              <ul className="projects_list_container">{myProjectList}</ul>
            </div>
            <div className="btn_group">
              <button onClick={this.onClickAddProject} className="add_btn">
                Add Project
              </button>
              <button className="save_btn">Save Portfolio</button>
              <button className="preview_btn">Preview Portfolio</button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default withRouter(MakePortfolioPage);
