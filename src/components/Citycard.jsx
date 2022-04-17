import React from "react";
import "./Citycard.css"

const CityCard = ({ name, isFavorite, clouds, weather}) => {
  return (
    <div className="city-card">
      <div className="city-card__name">
        {name}
        {clouds}
        {weather}
      </div>
      {isFavorite && "heart"}
    </div>
  );
};

export default CityCard;