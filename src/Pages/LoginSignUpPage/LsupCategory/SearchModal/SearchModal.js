import React from "react";
import "./SearchModal.scss";

const SearchModal = ({ open, close }) => {
  return (
    <>
      {open ? (
        <>
          <div className="searchModal">
            <div className="input-area">
              <div className="input-container">
                <input className="input" placeholder="search"></input>
              </div>
            </div>
            <div onClick={close}>Close</div>
          </div>
          <div classNeame="searchModal-overlay"></div>
        </>
      ) : null}
    </>
  );
};

export default SearchModal;
