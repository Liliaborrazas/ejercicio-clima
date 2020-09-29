import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import './styles.css' 
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
}  from './../../constanst/weathers'

const WeatherData = ()=>(
    <div className="weatherData-cont">
        <WeatherTemperature 
            temperature={30} 
            weatherState={SUN}
        />
        <WeatherExtraInfo humidity={80} wind={"20 m/s"}/>
    </div>
)

export default WeatherData;