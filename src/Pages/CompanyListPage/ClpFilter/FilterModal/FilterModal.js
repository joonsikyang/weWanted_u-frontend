import React, { Component } from "react";
import ReactModal from "react-modal";
import "./FilterModal.scss";

export class FilterModal extends Component {
  render() {
    return (
      <ReactModal
        className="filter-modal"
        isOpen={this.props.isOpen}
        contentLabel="filter"
        // onRequestClose={this.props.close}
        shouldCloseOnOverlayClick={true}
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
          <header>필터</header>
          <div>정렬</div>
          <div>국가</div>
          <div>지역</div>
        </div>
      </ReactModal>
    );
  }
}

export default FilterModal;
