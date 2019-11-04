import React from "react";
import ReactModal from "react-modal";
import "./CdpModal.scss";
import CdpTable from "../CdpTable/CdpTable";

const CdpModal = props => {
  return (
    <ReactModal
      isOpen={props.isOpen}
      className="modal_content"
      overlayClassName="modal_overlay"
      onRequestClose={props.handleCloseModal}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
    >
      <div className="modal_box">
        <header>
          <h3>면접후기 작성</h3>
        </header>
        <div className="modal_main">
          <div className="modal_top">
            <CdpTable
              category={props.category}
              career_year={props.career_year}
              interview_experience={props.interview_experience}
              interview_path={props.interview_path}
              interview_result={props.interview_result}
              code_test_level={props.code_test_level}
            />
          </div>
          <div className="modal_middle">
            <div className="question">
              <span>면접 질문</span>
              <textarea placeholder=" 최대한 자세하게 작성해주세요."></textarea>
            </div>
            <div className="answer">
              <span>면접 답변</span>
              <textarea placeholder=" 최대한 자세하게 작성해주세요."></textarea>
            </div>
            <div className="interview_review">
              <span>전체적인 면접 후기</span>
              <textarea placeholder=" 최대한 자세하게 작성해주세요."></textarea>
            </div>
          </div>
          <div className="modal_bottom">
            <div className="close" onClick={props.handleCloseModal}>
              취소
            </div>
            <div onClick={props.onClick} className="completed">
              작성 완료
            </div>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default CdpModal;
