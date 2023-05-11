import React from "react";
import FormattedDate from "./FormattedDate";
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
          <img
            src={props.data.icon}
            alt={props.data.description}
            className="weathericon"
          />

          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6 mt-2">
          <ul>
            <li className="conditions text-center">
              <img
                src={Humidity}
                alt="humidity"
                width={50}
                height={50}
                className="humidity"
              />
              : {Math.round(props.data.humidity)}%
            </li>
            <li className="conditions text-center">
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
