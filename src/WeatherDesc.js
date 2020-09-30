import React from "react";
import './WeatherDesc.css';

export default function WeatherDescription(props) {
  return (
    <div className="weath-desc">
      <div>Temp: {props.main} K</div>
      <div>Desc: {props.description} </div>
    </div>
  );
}