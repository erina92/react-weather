import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Humidity from "./icons/humidity.svg";
import Wind from "./icons/wind.svg";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>
        {props.data.city}, <span className="country">{props.data.country}</span>
      </h1>
      <ul>
        <li className="fw-bold">
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <WeatherIcon code={props.data.icon} alt={props.data.description} />
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6 mt-2 d-flex justify-content-center">
          <ul>
            <li className="conditions">
              <img
                src={Humidity}
                alt="humidity"
                width={50}
                height={50}
                className="humidity"
              />
              : {Math.round(props.data.humidity)}%
            </li>
            <li className="conditions">
              <img
                src={Wind}
                alt="wind"
                width={50}
                height={50}
                className="wind"
              />
              : {Math.round(props.data.wind)} km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
