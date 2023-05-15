import React from "react";
import Sunrise from "./icons/sunrise.svg";

export default function SunriseFormattedDate(props) {
  const sunriseTime = props.time;

  return (
    <div className="sunrise">
      <img src={Sunrise} width={50} height={50} alt="sunrise" /> : {sunriseTime}
    </div>
  );
}
