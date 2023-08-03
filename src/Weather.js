import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coord: response.data.coord,
      temperature: response.data.main.temp,
      feels: response.data.main.feels_like,
      min: response.data.main.temp_min,
      max: response.data.main.temp_max,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      country: response.data.sys.country,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      sunrise: new Date(response.data.sys.sunrise * 1000).toLocaleTimeString(),
      sunset: new Date(response.data.sys.sunset * 1000).toLocaleTimeString(),
    });
  }

  function search() {
    const apiKey = "03de31d04fb70d99511816e779098e29";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    // function for searching city state
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    // function for searching when a city is submitted
  }

  function handleCityChange(event) {
    setCity(event.target.value);
    // function for updating the city state when a city has been typed in the search form
  }

  if (weatherData.ready) {
    return (
      <div className="Weather" style={{ maxWidth: "30rem" }}>
        <form onSubmit={handleSubmit}>
          <div className="row text-center">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a location..."
                className="form-control"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <button type="submit" value="Search" className="btn btn-warning">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                </svg>
              </button>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <hr className="separator border border-warning border-2 opacity-75" />
        <WeatherForecast coord={weatherData.coord} />
      </div>
    );
  } else {
    search();
    return (
      <button class="btn btn-warning" type="button" disabled>
        <span
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        Loading...
      </button>
    );
  }
}
