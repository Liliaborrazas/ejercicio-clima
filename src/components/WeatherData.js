import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';


const WeatherData = ()=>(
    <div>
        <WeatherTemperature 
            temperature={30} 
            weatherState={'snow'}
        />
        <WeatherExtraInfo humidity={80} wind={"20 m/s"}/>
    </div>
)

export default WeatherData;