import React from "react";
import "./MppHeader.scss";
const MppHeader = props => {
  return (
    <div className="header">
      <div className="title">
        <textarea
          value={props.title}
          onChange={props.handleHeaderOnChange}
          type="text"
          name="title"
          className="title_input"
          placeholder="Title:"
        />
      </div>

      <div className="contact_info">
        <div className="contact_info_title">
          Contact<span className="period">.</span>
        </div>
        <input
          value={props.phone}
          onChange={props.handleHeaderOnChange}
          type="tel"
          name="phone"
          className="phone_input"
          placeholder="010-0101-0101"
          pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
          required
        />
        <input
          value={props.email}
          onChange={props.handleHeaderOnChange}
          type="email"
          name="email"
          className="email_input"
          placeholder="Email:"
        />
      </div>

      <div className="blog_link">
        <div className="blog_link_title">
          Blog<span className="period">.</span>
        </div>
        <input
          value={props.blog}
          onChange={props.handleHeaderOnChange}
          type="url"
          name="blog"
          className="blog_link_input"
          placeholder="Blog Url"
        />
      </div>

      <div className="about_me">
        <div className="about_me_title">
          About Me<span className="period">.</span>
        </div>
        <textarea
          value={props.about_me}
          onChange={props.handleHeaderOnChange}
          className="about_me_input"
          name="about_me"
          maxLength="2000"
          placeholder="Max Character 2000"
        />
      </div>
      <div className="header_border"></div>
    </div>
  );
};

export default MppHeader;
