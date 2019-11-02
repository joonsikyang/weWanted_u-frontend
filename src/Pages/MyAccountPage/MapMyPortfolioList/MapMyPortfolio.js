import React from "react";
import "./MapMyPortfolio.scss";

const MapMyPortfolio = props => {
  return (
    <ul className="map_my_portfolio">
      <li className="portfolio">
        {props.title} {props.dateCreated} {props.completed}
      </li>
    </ul>
  );
};

export default MapMyPortfolio;
