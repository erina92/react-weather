import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import ShowTemperature from "./ShowTemperature";
import Min from "./icons/thermometer-colder.svg";
import Max from "./icons/thermometer-warmer.svg";
import SunriseFormattedDate from "./SunriseFormattedDate";
import SunsetFormattedDate from "./SunsetFormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="city">
        {props.data.city},{" "}
        <span className="country">{props.data.country}</span>
      </h1>
      <ul>
        <li className="fw-bold">
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row align-items-center mt-1 mb-1 main-info">
        <div className="col text-center w-icon">
          <WeatherIcon
            code={props.data.icon}
            alt={props.data.description}
            style={{ display: "block", margin: "0 auto" }}
            className="main-weather-icon"
          />
        </div>
        <div className="col text-center degrees">
          <ShowTemperature celsius={props.data.temperature} />
        </div>
        <div className="col text-center h-w">
          <ul className="humidity-wind">
            <li className="conditions">
              Humidity: {Math.round(props.data.humidity)}%
            </li>
            <li className="conditions">
              Wind: {Math.round(props.data.wind)} km/h
            </li>
          </ul>
        </div>
      </div>
      <div className="info-pills">
        <div className="info-pill">
          Feels {Math.round(props.data.feels)}°C
        </div>
        <div className="info-pill">
          <img src={Min} alt="min" width={20} height={20} />
          {Math.round(props.data.min)}°C
        </div>
        <div className="info-pill">
          <img src={Max} alt="max" width={20} height={20} />
          {Math.round(props.data.max)}°C
        </div>
      </div>
      <div className="sunrise-sunset">
        <SunriseFormattedDate time={props.data.sunrise} />
        <SunsetFormattedDate time={props.data.sunset} />
      </div>
    </div>
  );
}
