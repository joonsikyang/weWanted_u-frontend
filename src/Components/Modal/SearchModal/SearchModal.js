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
            <input className="input" placeholder="search"></input>
          </div>
        </div>
        <div className="close-btn" onClick={this.props.onClick}>
          Close
        </div>
      </ReactModal>
    );
  }
}
