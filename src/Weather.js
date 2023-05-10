import React from "react";
import PartlyCloudyDay from "./icons/partly-cloudy-day.svg";
import Humidity from "./icons/humidity.svg";
import Wind from "./icons/wind.svg";
import "./Weather.css";

export default function Weather() {
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
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Taranto</h1>
      <ul>
        <li>Wednesday 10:23</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src={PartlyCloudyDay} alt="Cloudy" width={100} height={100} />
          18°C
        </div>
        <div className="col-6">
          <ul>
            <li>
              <img src={Humidity} alt="humidity" width={50} height={50} />: 15%
            </li>
            <li>
              <img src={Wind} alt="wind" width={50} height={50} />: 13 km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
