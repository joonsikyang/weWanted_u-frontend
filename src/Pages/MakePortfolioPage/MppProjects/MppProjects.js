import React from "react";
import "./MppProjects.scss";

const MppProjects = () => {
  return (
    <div className="mpp_projects">
      <div className="my_projects_container">
        <input className="project_title_input" placeholder="Project Title" />
        <input
          type="url"
          className="links_input"
          placeholder="Github/Source Url"
        />
      </div>

      <div className="description_container">
        <div className="project_description_title">
          Description<span className="period">.</span>
        </div>
        <textarea
          className="project_description_input"
          maxLength="2000"
          placeholder="Max Character 2000"
        />

        <div className="what_did_i_do_title">
          What Did I Do<span className="period">.</span>
        </div>
        <textarea
          className="what_did_i_do_input"
          maxLength="2000"
          placeholder="Max Character 2000"
        />

        <div className="tech_stack_title">
          Tech Stack<span className="period">.</span>
        </div>
        <textarea
          className="tech_stack_input"
          maxLength="2000"
          placeholder="Max Character 2000"
        />
      </div>
    </div>
  );
};

export default MppProjects;
