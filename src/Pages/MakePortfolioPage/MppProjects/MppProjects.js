import React from "react";
import "./MppProjects.scss";

const MppProjects = props => {
  return (
    <li className="mpp_projects">
      <div className="my_projects_container">
        <input
          value={props.projectTitle}
          id={props.id}
          onChange={props.handleOnChange}
          type="text"
          className="project_title_input"
          name="projectTitle"
          placeholder="Project Title"
        />
        <input
          value={props.github}
          id={props.id}
          onChange={props.handleOnChange}
          type="url"
          name="github"
          className="links_input"
          placeholder="Github/Source Url"
        />
        <button className="remove_btn">Remove Project</button>
      </div>

      <div className="description_container">
        <div className="project_description_title">
          Description<span className="period">.</span>
        </div>
        <textarea
          value={props.description}
          id={props.id}
          onChange={props.handleOnChange}
          className="project_description_input"
          name="description"
          maxLength="2000"
          placeholder="Max Character 2000"
        />

        <div className="what_did_i_do_title">
          What Did I Do<span className="period">.</span>
        </div>
        <textarea
          value={props.whatDidIDo}
          id={props.id}
          onChange={props.handleOnChange}
          className="what_did_i_do_input"
          name="whatDidIDo"
          maxLength="2000"
          placeholder="Max Character 2000"
        />

        <div className="tech_stack_title">
          Tech Stack<span className="period">.</span>
        </div>
        <textarea
          value={props.techStack}
          id={props.id}
          onChange={props.handleOnChange}
          className="tech_stack_input"
          name="techStack"
          maxLength="2000"
          placeholder="Max Character 2000"
        />
      </div>
    </li>
  );
};

export default MppProjects;
