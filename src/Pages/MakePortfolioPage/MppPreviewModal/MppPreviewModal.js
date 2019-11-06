import React from "react";
import "./MppPreviewModal.scss";
import "../../PreviewPortfolioPage/PreviewPortfolioPage.scss";
import ReactModal from "react-modal";
import ModalPreviewHeader from "./ModalPreviewHeader";
import ModalPreviewProjects from "./ModalPreviewProjects";

class MppPreviewModal extends React.Component {
  render() {
    console.log(this.state);
    const myProjectList = this.props.projects.map((project, i) => (
      <ModalPreviewProjects
        key={i}
        project_title={project.project_title}
        github={project.github}
        description={project.description}
        what_did_i_do={project.what_did_i_do}
        tech_stack={project.tech_stack}
      />
    ));
    return (
      <div className="modal_container">
        <ReactModal
          className="portfolio_preview_modal"
          isOpen={this.props.show_modal}
          contentLabel="portfolio_preview"
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          onRequestClose={this.props.onClickCloseModal}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.4)"
            },
            content: {
              outline: "none"
            }
          }}
        >
          <div>
            <>
              <div className="portfolio_preview_modal_top_bar"></div>
              <div className="portfolio_preview_modal_page">
                <div className="portfolio_preview_modal_container">
                  <ModalPreviewHeader
                    title={this.props.title}
                    phone={this.props.phone}
                    email={this.props.email}
                    blog={this.props.blog}
                    about_me={this.props.about_me}
                  />
                  <div className="portfolio_preview_modal_divider"></div>
                  <div className="portfolio_preview_modal_projects_title_bar">
                    <div className="portfolio_preview_modal_projects_title">
                      Projects
                    </div>
                  </div>
                  <div className="portfolio_preview_modal_projects_container">
                    <ul className="portfolio_preview_modal_projects_list_container">
                      {myProjectList}
                    </ul>
                  </div>
                  <button
                    onClick={this.props.onClickCloseModal}
                    className="close_modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </>
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default MppPreviewModal;
