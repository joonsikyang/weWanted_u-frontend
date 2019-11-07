import React, { Component } from "react";
import "./ClpFilter.scss";
import FilterModal from "./FilterModal";

export class ClpFilter extends Component {
  constructor() {
    super();
    this.state = {
      modal: false
    };
  }

  handleFilterModal = () => {
    this.setState({
      modal: true
    });
  };

  handleCloseFilterModal = () => {
    this.setState({
      modal: false
    });
  };

  render() {
    return (
      <div className="filter_container">
        <div className="filter_left">
          <div className="filter_item">
            <span className="filter-contents-blue">최신순</span>
          </div>
          <div className="filter_item">
            <span className="filter-name">국가</span>
            <span className="filter-contents-blue">한국</span>
          </div>
          <div className="filter_item">
            <span className="filter-name">지역</span>
            <span className="filter-contents-black">전국</span>
          </div>
          <div className="filter_item">
            <span className="filter-name">경력</span>
            <span className="filter-contents-black">전체</span>
          </div>
        </div>
        <div className="filter_right">
          <div className="filter_btn" onClick={this.handleFilterModal}>
            <div>Filter</div>
          </div>
          <FilterModal
            isOpen={this.state.modal}
            isClose={this.handleCloseFilterModal}
          />
        </div>
      </div>
    );
  }
}

export default ClpFilter;
