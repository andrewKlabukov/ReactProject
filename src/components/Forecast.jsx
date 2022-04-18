import arrow from "../img/arrow.svg" 
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CityCard from "./Citycard";

const Forecast = () => {

  const [cities, setCities] = useState([]);
  const [value, setValue] = useState("");
  const [favorites, setFavorites] = useState([]);

  const handleChange = (value) => {
    setValue(value);
  };

  useEffect(() => {
    if (value && value.length > 2) {
      fetch(
        `https://openweathermap.org/data/2.5/find?q=${value}&type=like&sort=population&cnt=30&appid=439d4b804bc8187953eb36d2a8c26a02&_=1637331149541`
      )
        .then((response) => response.json())
        .then((data) => {
          setCities(data.list);
        });
    }
  }, [value]);

  useEffect(() => {
    const localFavorites = localStorage.getItem("favorites");
    setFavorites(localFavorites ? localFavorites : []);
  }, []);

    return (
      <div className="main">
        <div className="main-input">
          <input type="text" placeholder="Укажите город" onChange={(e) => handleChange(e.target.value)} />
        </div>
        {cities.map((city) => {
          return (
            <div>
              <Link to={`cities/${city.id}`}>
                <CityCard
                  isFavorite={favorites.includes(city.id)}
                  name={city.name}
                />
              </Link>
            </div>
          );
        })}
        <div className="main-content">
          <img className="main-content__arrow" src={arrow} alt="arrow" />
          <p>
            Начните вводить город<br/> например <span>Ижевск</span>
          </p>
        </div>        
      </div>
    )
}

export default Forecast;