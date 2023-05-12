import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  const apiKey = "93d43dfe3b4a950e5b187e5dc313705e";
  const lon = props.coord.lon;
  const lat = props.coord.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Wed</div>
          <WeatherIcon
            code="13d"
            style={{ width: "60px", height: "60px", display: "inline-block" }}
          />
          <div className="forecast-temp">
            <span className="forecast-min-temp">10°</span>
            <span className="forecast-max-temp">15°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
