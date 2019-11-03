import React, { Component } from "react";
import ReactModal from "react-modal";
import "./SearchModal.scss";

export class SearchModal extends Component {
  render() {
    return (
      <ReactModal
        className="searchModal"
        isOpen={this.props.isOpen}
        contentLabel="search"
        style={{
          overlay: { backgroundColor: "rgba(0, 0, 0, 0.4)" },
          content: {
            outline: "none"
          }
        }}
      >
        <div className="input-area">
          <div className="input-container">
            <input
              className="input"
              placeholder="#태그, 회사, 포지션 검색"
            ></input>
          </div>
          <div className="close-btn" onClick={this.props.onClick}>
            Close
          </div>
        </div>
        <div className="search-bottom">
          <div className="recommend-tag">추천태그로 검색해보세요</div>
          <ul className="tag-container">
            <li className="tag">#HTML</li>
            <li className="tag">#CSS</li>
            <li className="tag">#JavaScript</li>
          </ul>
        </div>
      </ReactModal>
    );
  }
}
