import React from "react";
import Sunset from "./icons/sunset.svg";

export default function SunsetFormattedDate(props) {
  const sunsetTime = props.time;

  return (
    <div className="sunset">
      <img src={Sunset} width={50} height={50} alt="sunset" /> : {sunsetTime}
    </div>
  );
}
