import React from 'react';
import Location from './Location';
import Weatherdata from './../WeatherData';
// import PropTypes from 'prop-types'

const WeatherLocation = ()=>(
    <div>
       <Location city = {"Madrid"} />
       <Weatherdata/>
    </div>
)

export default WeatherLocation;