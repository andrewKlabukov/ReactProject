import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const City = () => {
  const [city, setCity] = useState();
  const params = useParams();

  useEffect(() => {
    const { cityId } = params;
    fetch(
      `https://openweathermap.org/data/2.5/weather?id=${cityId}&appid=439d4b804bc8187953eb36d2a8c26a02`
    )
      .then((response) => response.json())
      .then((data) => {
        setCity(data);
        console.log(data)
        console.log(data.id)
        console.log(data.weather[0].main)
      });
  }, [params]);

  return (
    <div>
      {city === undefined ? (
        <div>Loading</div>
      ) : (
        <div>
          {city.name}'s temp: {Math.round(city.main.temp)}&deg;<br/>
          clouds: {city.clouds.all}<br/>
          weather {city.weather[0].main        }
        </div>
      )}
    </div>
  );
};

export default City;