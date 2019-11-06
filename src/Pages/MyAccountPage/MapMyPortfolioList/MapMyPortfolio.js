import React from "react";
import "./MapMyPortfolio.scss";

const MapMyPortfolio = props => {
  return (
    <ul className="map_my_portfolio">
      <li className="portfolio">
        <div className="portfolio_container">
          <div className="portfolio_details">
            <div className="details_title">{props.title}</div>
            <div className="date_status_container">
              <div className="details_date">{props.dateCreated}</div>
              <div className="details_status">{props.completed}</div>
            </div>
          </div>
          <div className="portfolio_options">
            <button className="portfolio_view"></button>
            <button className="portfolio_edit"></button>
            <button className="portfolio_delete"></button>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default MapMyPortfolio;
