import React from "react";
import "./PppHeader.scss";

const PppHeader = props => {
  return (
    <div className="ppp_header">
      <div className="ppp_title">
        <div className="ppp_title_value">{props.title}</div>
      </div>

      <div className="ppp_contact_info">
        <div className="ppp_contact_info_title">
          Contact<span className="ppp_period">.</span>
        </div>
        <div className="ppp_phone_value"> {props.phone}</div>
        <div className="ppp_email_value"> {props.email} </div>
      </div>

      <div className="ppp_blog_link">
        <div className="ppp_blog_link_title">
          Blog<span className="ppp_period">.</span>
        </div>
        <a href={props.blog} className="ppp_blog_link_value">
          {props.blog}
        </a>
      </div>

      <div className="ppp_about_me">
        <div className="ppp_about_me_title">
          About Me<span className="ppp_period">.</span>
        </div>
        <div className="ppp_about_me_value">{props.about_me}</div>
      </div>
    </div>
  );
};

export default PppHeader;
