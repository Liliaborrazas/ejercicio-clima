import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';


const WeatherData = ()=>(
    <div>
        <WeatherExtraInfo humidity={80} wind={"20 m/s"}/>
        <WeatherTemperature temperature={30} weatherState={''}/>
    </div>
)

export default WeatherData;