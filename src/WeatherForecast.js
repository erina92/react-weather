import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
    // [0] first day of the forecast
    // .map() is used for looping through the number of the object inside forecastData,
    // otherwise we can repeat the same line < div className = "col" > all over again by changing the information inside the prop { forecastData[1] } etc.
    // we're using useEffect in React allows to apply changes after the component is loaded if something changes!

    // if the coordinates change when we type for a city in the search form
    // we want to setLoaded to false, otherwise it would run the "else" part again!
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row mt-2">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "93d43dfe3b4a950e5b187e5dc313705e";
    const lon = props.coord.lon;
    const lat = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
