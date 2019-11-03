import React from "react";
import "./MapMyPortfolio.scss";

const MapMyPortfolio = props => {
  return (
    <ul className="map_my_portfolio">
      <li className="portfolio">
        <div className="portfolio_container">
          <div className="portfolio_details">
            <div className="details">{props.title}</div>
            <div className="details">{props.dateCreated}</div>
            <div className="details">{props.completed}</div>
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
