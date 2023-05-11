import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import ReactLoading from "react-loading";
import Humidity from "./icons/humidity.svg";
import Wind from "./icons/wind.svg";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      country: response.data.sys.country,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
    });
  }

  const apiKey = "03de31d04fb70d99511816e779098e29";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-success" />
            </div>
          </div>
        </form>
        <h1>
          {weatherData.city},{" "}
          <span className="country">{weatherData.country}</span>
        </h1>
        <ul>
          <li className="fw-bold">
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <img src={weatherData.icon} alt={weatherData.description} />

            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6 mt-2">
            <ul>
              <li className="conditions">
                <img
                  src={Humidity}
                  alt="humidity"
                  width={50}
                  height={50}
                  className="humidity"
                />
                : {Math.round(weatherData.humidity)}%
              </li>
              <li className="conditions">
                <img
                  src={Wind}
                  alt="wind"
                  width={50}
                  height={50}
                  className="wind"
                />
                : {Math.round(weatherData.wind)} km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <ReactLoading
        type="balls"
        color="#000"
        height={50}
        width={50}
        animated={true}
      />
    );
  }
}
