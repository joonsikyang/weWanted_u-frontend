import React from "react";
import "./ModalPreviewHeader.scss";

const ModalPreviewHeader = props => {
  return (
    <div className="modal_preview_header">
      <div className="modal_preview_title">
        <div className="modal_preview_title_value">{props.title}</div>
      </div>

      <div className="modal_preview_contact_info">
        <div className="modal_preview_contact_info_title">
          Contact<span className="modal_preview_period">.</span>
        </div>
        <div className="modal_preview_phone_value"> {props.phone}</div>
        <div className="modal_preview_email_value"> {props.email} </div>
      </div>

      <div className="modal_preview_blog_link">
        <div className="modal_preview_blog_link_title">
          Blog<span className="modal_preview_period">.</span>
        </div>
        <a href={props.blog} className="modal_preview_blog_link_value">
          {props.blog}
        </a>
      </div>

      <div className="modal_preview_about_me">
        <div className="modal_preview_about_me_title">
          About Me<span className="modal_preview_period">.</span>
        </div>
        <div className="modal_preview_about_me_value">{props.about_me}</div>
      </div>
    </div>
  );
};

export default ModalPreviewHeader;
