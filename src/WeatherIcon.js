import React from "react";
import ClearDayIcon from "./icons/clear-day.svg";
import ClearNightIcon from "./icons/clear-night.svg";
import CloudyIcon from "./icons/cloudy.svg";
import PartlyCloudyDay from "./icons/partly-cloudy-day.svg";
import PartlyCloudyNight from "./icons/partly-cloudy-night.svg";
import BrokenClouds from "./icons/overcast.svg";
import ShowerRain from "./icons/overcast-rain.svg";
import RainDay from "./icons/overcast-day-rain.svg";
import RainNight from "./icons/overcast-night-rain.svg";
import ThunderstormDay from "./icons/thunderstorms-day.svg";
import ThunderstormNight from "./icons/thunderstorms-night.svg";
import Snow from "./icons/snow.svg";
import Mist from "./icons/mist.svg";

export default function WeatherIcon(props) {
  const iconCode = {
    "01d": <ClearDayIcon />,
    "01n": <ClearNightIcon />,
    "02d": <CloudyIcon />,
    "02n": <PartlyCloudyNight />,
    "03d": <PartlyCloudyDay />,
    "03n": <PartlyCloudyNight />,
    "04d": <BrokenClouds />,
    "04n": <BrokenClouds />,
    "09d": <ShowerRain />,
    "09n": <ShowerRain />,
    "10d": <RainDay />,
    "10n": <RainNight />,
    "11d": <ThunderstormDay />,
    "11n": <ThunderstormNight />,
    "13d": <Snow />,
    "13n": <Snow />,
    "50d": <Mist />,
    "50n": <Mist />,
  };

  return <svg href={iconCode[props.code]} size={props.size}></svg>;
}
