import React from 'react';
import WeatherIcons from 'react-weathericons';

const icons = {
    sun :"day-sunny",
    fog: "day-fog",
    cloud: "cloud",
    cloudy: "cloudy",
    rain:"rain",
    snow:"snow",
    windy:"windy"
    }

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState]
    if(icon)
        return <WeatherIcons name={icon} size="2x"/>
    else
        return <WeatherIcons name={'day-sunny'} size="2x"/>
}
const WeatherTemperature = ({temperature, weatherState}) => (
<div>
   {getWeatherIcon(weatherState)}
    <span>{`${temperature} Cº`}</span>
</div>
);

export default WeatherTemperature;