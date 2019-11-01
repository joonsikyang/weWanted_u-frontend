import React from "react";
import "./PppProjects.scss";

const PppProjects = props => {
  return (
    <li className="ppp_projects">
      <div className="ppp_my_projects_container">
        <div className="ppp_project_title_value">{props.project_title}</div>
        <a href={props.github} className="ppp_links_value"></a>
      </div>

      <div className="ppp_description_container">
        <div className="ppp_project_description_title">
          Description<span className="ppp_period">.</span>
        </div>
        <div className="ppp_project_description_value">{props.description}</div>

        <div className="ppp_what_did_i_do_title">
          What Did I Do<span className="ppp_period">.</span>
        </div>
        <div className="ppp_what_did_i_do_value">{props.what_did_i_do}</div>

        <div className="ppp_tech_stack_title">
          Tech Stack<span className="ppp_period">.</span>
        </div>
        <div className="ppp_tech_stack_value">{props.tech_stack}</div>
      </div>
    </li>
  );
};

export default PppProjects;
