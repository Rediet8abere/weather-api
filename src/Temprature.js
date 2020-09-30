import React from "react";

import './Temprature.css';

export default function Temprature(props) {
  return (
    <div className="temp">
      <div>Temp: {props.temp} K</div>
      <div>Temp:{Math.floor((props.temp*9/5) - 459.67)} F</div>
      <div> Min: {props.temp_min}  Max:{props.temp_max}</div>
    </div>
  );
}