import React from "react";
import "./MppHeader.scss";
const MppHeader = () => {
  return (
    <div className="header">
      <div className="name">
        <span className="name_title">Name:</span>
        <input className="name_input" />
      </div>

      <div className="contact_info">
        <div className="contact_info_title">Contact Info</div>
        <span className="phone_title">Phone:</span>
        <input
          type="tel"
          className="phone_input"
          pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
          required
        />
        <span className="email_title">Email:</span>
        <input type="email" className="email_input" />
      </div>

      <div className="about_me">
        <span className="about_me_title">About Me:</span>
        <textarea className="about_me_input" />
      </div>

      <div className="blog_link">
        <span className="blog_link_title">Blog:</span>
        <input type="url" className="blog_link_input" />
      </div>
    </div>
  );
};

export default MppHeader;
