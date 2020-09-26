import React from 'react';
import Location from './Location';
import Weatherdata from './WeatherData';

const WeatherLocation = ()=>(
    <div>
       <Location city = {"Mar del Plata"} />
       <Weatherdata/>
    </div>
)

export default WeatherLocation;