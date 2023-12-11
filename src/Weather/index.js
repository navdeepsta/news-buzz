import React, { useState, useEffect } from "react";
import "./Weather.css";

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
export default function Weather() {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    fetch(`http://api.weatherapi.com/v1/current.json?q=Melbourne`, {
      headers: {
        key: apiKey,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setWeather(response);
      })
      .catch((error) => console.log(error));
  }, []); 

  return (
    <div className="weather">
      {weather ? (
        <div>
          <h2>{weather.location.name}</h2>
          <p>
            <img
              src={weather.current.condition.icon}
              alt={`Current weather condition: ${weather.current.condition.text}`}
            />
            {weather.current.temp_c}&deg;C
          </p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}
