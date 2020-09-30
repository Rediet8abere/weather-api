import React from "react";
import Temprature from './Temprature';
import WeatherDescription from './WeatherDesc';
import Atmosphere from './Atmosphere';
import './Weather.css'


export default function Weather(props) {
  const { main, description, icon } = props.weatherData
  const { temp, pressure, humidity, temp_min, temp_max } = props.main
  return (
    
    <div className="weather">
      <Temprature temp={temp} temp_min={temp_min} temp_max={temp_max}/>
      <WeatherDescription main={main} description={description}/>
      <Atmosphere icon={icon} pressure={pressure} humidity={humidity}/>
    </div>
  );
}