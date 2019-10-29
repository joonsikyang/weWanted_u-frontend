import React from "react";
import "./MppHeader.scss";
const MppHeader = () => {
  return (
    <div className="header">
      <div className="name">
        <input type="text" className="name_input" placeholder="Name:" />
      </div>

      <div className="contact_info">
        <div className="contact_info_title">
          Contact<span className="period">.</span>
        </div>
        <input
          type="tel"
          className="phone_input"
          placeholder="010-0101-0101"
          pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
          required
        />
        <input type="email" className="email_input" placeholder="Email:" />
      </div>

      <div className="blog_link">
        <div className="blog_link_title">
          Blog<span className="period">.</span>
        </div>
        <input type="url" className="blog_link_input" placeholder="Blog Url" />
      </div>

      <div className="about_me">
        <div className="about_me_title">
          About Me<span className="period">.</span>
        </div>
        <textarea
          className="about_me_input"
          maxLength="2000"
          placeholder="Max Character 2000"
        />
      </div>
      <div className="header_border"></div>
    </div>
  );
};

export default MppHeader;
