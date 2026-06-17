import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    return `${Math.round(props.data.temp.max)}°`;
  }

  function minTemp() {
    return `${Math.round(props.data.temp.min)}°`;
  }

  function day() {
    const date = new Date(props.data.dt * 1000);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return (
      <div>
        {days[date.getDay()]} {date.getDate()}
      </div>
    );
  }

  return (
    <div className="forecast-item">
      <div className="forecast-day">{day()}</div>
      <WeatherIcon
        code={props.data.weather[0].icon}
        alt={props.data.weather[0].description}
        style={{ width: 46, height: 46, display: "block", margin: "4px auto" }}
      />
      <div className="forecast-temp">
        <span className="forecast-min-temp">{minTemp()}</span>
        <span className="forecast-max-temp">{maxTemp()}</span>
      </div>
    </div>
  );
}
