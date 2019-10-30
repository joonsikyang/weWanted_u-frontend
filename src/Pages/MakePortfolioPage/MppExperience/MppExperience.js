import React from "react";
import "./MppExperience.scss";
const MppExperience = () => {
  return (
    <div className="mpp_experience">
      <div className="projects_title"> Projects</div>
      <div className="projects">
        <div className="title_container">
          <div className="title">
            Project Title: <input className="title_input" />
          </div>

          <div className="links">
            Project Links: <input type="url" classNmae="links_input" />
          </div>
        </div>

        <div className="description_container">
          <div className="description">
            Project Description: <textarea className="description_input" />
          </div>

          <div className="what_did_i_do">
            What Did I Do?: <textarea className="what_did_i_do_input" />
          </div>

          <div className="tech_stack">
            Tech Stack: <textarea className="tech_stack_input" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MppExperience;
