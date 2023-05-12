import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}°`;
  }
  function minTemp() {
    let minTemp = Math.round(props.data.temp.min);
    return `${minTemp}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let number = date.getDate();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    return (
      <div>
        {days[day]}, {number}
      </div>
    );
  }

  return (
    <div>
      <div className="forecast-day">{day()}</div>
      <WeatherIcon
        code={props.data.weather[0].icon}
        style={{
          width: "60px",
          height: "60px",
          display: "inline-block",
        }}
      />
      <div className="forecast-temp">
        <span className="forecast-min-temp">{minTemp()}</span>
        <span className="forecast-max-temp">{maxTemp()}</span>
      </div>
    </div>
  );
}
