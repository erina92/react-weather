import React, { useState } from "react";
import axios from "axios";
import WeatherInformation from "./WeatherInformation";
import ReactLoading from "react-loading";
import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeather] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleWeatherData(response) {
    setWeather({
      loaded: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function handleUpdateCity(event) {
    setCity(event.target.value);
  }

  function searchCity() {
    const apiKey = "03de31d04fb70d99511816e779098e29";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleWeatherData);
  }

  if (weather.loaded) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleUpdateCity}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <WeatherInformation data={weather.temperature} />
      </div>
    );
  } else {
    searchCity();
    return (
      <ReactLoading
        type="balls"
        color="black"
        height={100}
        width={100}
        className="loader"
      />
    );
  }
}
