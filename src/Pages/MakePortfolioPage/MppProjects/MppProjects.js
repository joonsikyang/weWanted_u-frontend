import React from "react";
import "./MppProjects.scss";

const MppProjects = props => {
  return (
    <li className="mpp_projects" id={props.id}>
      <div className="my_projects_container">
        <input
          value={props.project_title}
          onChange={event => {
            props.handleProjectsOnChange(event, props.id);
          }}
          type="text"
          className="project_title_input"
          name="project_title"
          placeholder="Project Title"
        />
        <input
          value={props.github}
          onChange={event => {
            props.handleProjectsOnChange(event, props.id);
          }}
          type="url"
          name="github"
          className="links_input"
          placeholder="Github/Source Url"
        />
        <button
          onClick={() => props.onClickRemoveProject(props.id)}
          className="remove_btn"
        ></button>
      </div>

      <div className="description_container">
        <div className="project_description_title">
          Description<span className="period">.</span>
        </div>
        <textarea
          value={props.description}
          onChange={event => {
            props.handleProjectsOnChange(event, props.id);
          }}
          className="project_description_input"
          name="description"
          maxLength="2000"
          placeholder="Max Character 2000"
        />

        <div className="what_did_i_do_title">
          What Did I Do<span className="period">.</span>
        </div>
        <textarea
          value={props.what_did_i_do}
          onChange={event => {
            props.handleProjectsOnChange(event, props.id);
          }}
          className="what_did_i_do_input"
          name="what_did_i_do"
          maxLength="2000"
          placeholder="Max Character 2000"
        />

        <div className="tech_stack_title">
          Tech Stack<span className="period">.</span>
        </div>
        <textarea
          value={props.tech_stack}
          onChange={event => {
            props.handleProjectsOnChange(event, props.id);
          }}
          className="tech_stack_input"
          name="tech_stack"
          maxLength="2000"
          placeholder="Max Character 2000"
        />
      </div>
    </li>
  );
};

export default MppProjects;
