import React from "react";
import { Link } from "react-router-dom";
import "./MapMyPortfolio.scss";

const MapMyPortfolio = props => {
  const status = () => {
    if (props.completed === 3) {
      return "Completed";
    } else if (props.completed === 4) {
      return "In Progress";
    }
  };
  //please work

  return (
    <ul className="map_my_portfolio">
      <li className="portfolio">
        <div className="portfolio_container">
          <div className="portfolio_details">
            <div className="details_title">{props.title}</div>
            <div className="date_status_container">
              <div className="details_date">{props.dateCreated}</div>
              <div className="details_status">{status()}</div>
            </div>
          </div>
          <div className="portfolio_options">
            <Link to={`/preview_portfolio/${props.portfolioId}`}>
              <button className="portfolio_view"></button>
            </Link>
            <Link to={`/make_portfolio/${props.portfolioId}`}>
              <button className="portfolio_edit"></button>
            </Link>
            <button className="portfolio_delete"></button>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default MapMyPortfolio;
