
import React from "react";
import './Atmosphere.css';

export default function Atmosphere(props) {
  return (
    <div className="atmos">
      <div>Icon: {props.icon}</div>
      <div>Pressure: {props.pressure}</div>
      <div>Humidity: {props.humidity}</div>
    </div>
  );
}