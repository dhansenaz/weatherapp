import React from "react";

const Weather = props => (
  <div class="weather-data">
    {props.city && props.country && (
      <p className="p1">The Current Temperature is: {props.temperature}</p>
    )}
    {props.location && (
      <p>
        Location: {props.city},{props.country}
      </p>
    )}
    {props.description && (
      <p className="p2">The Current Conditions are: {props.description}</p>
    )}
    {props.humidity && (
      <p className="p3">The Current Humidity is: {props.humidity}%</p>
    )}
    {props.error && <p>{props.error}</p>}
  </div>
);

export default Weather;
