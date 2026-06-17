import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
    const apiKey = "93d43dfe3b4a950e5b187e5dc313705e";
    const { lat, lon } = props.coord;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then((response) => {
      setForecastData(response.data.daily);
      setLoaded(true);
    });
  }, [props.coord]);

  if (!loaded) return null;

  return (
    <div className="WeatherForecast">
      <div className="row mt-2">
        {forecastData.slice(0, 4).map((dailyForecast, index) => (
          <div className="col" key={index}>
            <WeatherForecastDay data={dailyForecast} />
          </div>
        ))}
      </div>
    </div>
  );
}
