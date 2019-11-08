import React from "react";
import "./ModalPreviewProjects.scss";

const ModalPreviewProjects = props => {
  return (
    <li className="modal_preview_projects">
      <div className="modal_preview_my_projects_container">
        <div className="modal_preview_project_title_value">
          {props.project_title}
        </div>
        <a href={props.github} className="modal_preview_project_links_value">
          ""
        </a>
      </div>

      <div className="modal_preview_description_container">
        <div className="modal_preview_project_description_title">
          Description<span className="modal_preview_period">.</span>
        </div>
        <div className="modal_preview_project_description_value">
          {props.description}
        </div>

        <div className="modal_preview_what_did_i_do_title">
          What Did I Do<span className="modal_preview_period">.</span>
        </div>
        <div className="modal_preview_what_did_i_do_value">
          {props.what_did_i_do}
        </div>

        <div className="modal_preview_tech_stack_title">
          Tech Stack<span className="modal_preview_period">.</span>
        </div>
        <div className="modal_preview_tech_stack_value">{props.tech_stack}</div>
      </div>
    </li>
  );
};

export default ModalPreviewProjects;
