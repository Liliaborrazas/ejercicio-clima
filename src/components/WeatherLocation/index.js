import React from 'react';
import Location from './Location';
import Weatherdata from './../WeatherData';
import './styles.css' 
import { 
    SUN, 
}  from './../../constanst/weathers'
// import PropTypes from 'prop-types'

const WeatherLocation = ()=>(
    <div className="weatherLocationCont">
       <Location city = {"Madrid"} />
       <Weatherdata/>
    </div>
)

export default WeatherLocation;