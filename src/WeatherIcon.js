import React from "react";
import ClearDayIcon from "./clear-day.svg";
import ClearNightIcon from "./clear-night.svg";
import CloudyIcon from "./cloudy.svg";
import PartlyCloudyDay from "./partly-cloudy-day.svg";
import PartlyCloudyNight from "./partly-cloudy-night.svg";
import BrokenClouds from "./overcast.svg";
import ShowerRain from "./overcast-rain.svg";
import RainDay from "./overcast-day-rain.svg";
import RainNight from "./overcast-night-rain.svg";
import ThunderstormDay from "./thunderstorms-day.svg";
import ThunderstormNight from "./thunderstorms-night.svg";
import Snow from "./snow.svg";
import Mist from "./mist.svg";

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
