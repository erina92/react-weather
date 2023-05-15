import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import ShowTemperature from "./ShowTemperature";
import Humidity from "./icons/humidity.svg";
import Wind from "./icons/windsock.svg";
import Min from "./icons/thermometer-colder.svg";
import Max from "./icons/thermometer-warmer.svg";
import SunriseFormattedDate from "./SunriseFormattedDate";
import SunsetFormattedDate from "./SunsetFormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="city">
        {props.data.city}, <span className="country">{props.data.country}</span>
      </h1>
      <ul>
        <li className="fw-bold">
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-2">
        <div className="col-6">
          <WeatherIcon
            code={props.data.icon}
            alt={props.data.description}
            style={{ display: "inline-block" }}
          />
          <ShowTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-6 mt-2 d-flex justify-content-center">
          <ul className="humidity-wind">
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
        <div className="btn-group temp " role="group">
          <button className="btn btn-outline-warning" type="button">
            Feels: {Math.round(props.data.feels)} °C
          </button>
          <button className="btn btn-outline-warning" type="button">
            <img src={Min} alt="min" width={30} height={30} />:{" "}
            {Math.round(props.data.min)} °C
          </button>
          <button className="btn btn-outline-warning" type="button">
            <img src={Max} alt="max" width={30} height={30} />:{" "}
            {Math.round(props.data.max)} °C
          </button>
        </div>
        <div className="btn-group mt-2 " role="group">
          <SunriseFormattedDate time={props.data.sunrise} />{" "}
          <SunsetFormattedDate time={props.data.sunset} />
        </div>
      </div>
    </div>
  );
}
