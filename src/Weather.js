import React from "react";
import PartlyCloudyDay from "./icons/partly-cloudy-day.svg";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Taranto</h1>
      <ul>
        <li>Wednesday 10:23</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src={PartlyCloudyDay} alt="Cloudy" />
          18°C
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 15%</li>
            <li>Wind: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
