import React, { Component } from "react";
import ReactModal from "react-modal";
import "./FilterModal.scss";

export class FilterModal extends Component {
  render() {
    return (
      <ReactModal
        className="filter-modal"
        contentLabel="filter"
        isOpen={this.props.isOpen}
        onRequestClose={this.props.isClose}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.4)"
          },
          content: {
            outline: "none"
          }
        }}
      >
        <div className="modal-container">
          <header>
            <div className="header-title">필터</div>
            <div className="close-btn" onClick={this.props.isClose}>
              close
            </div>
          </header>
          <div className="modal-bottom">
            <div className="filter-item-container">
              <div className="filter-item-title">정렬</div>
              <select>
                <option>최신순</option>
                <option>인기순</option>
              </select>
            </div>
            <div className="filter-item-container">
              <div className="filter-item-title">국가</div>
              <div className="filter-item-contents">Filter Contents</div>
            </div>
            <div className="filter-item-container">
              <div className="filter-item-title">지역</div>
              <div className="filter-item-contents">Filter Contents</div>
            </div>
          </div>
        </div>
      </ReactModal>
    );
  }
}

export default FilterModal;
