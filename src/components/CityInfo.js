import React, { Component } from "react";
import location from "../assets/icons/location.svg";
import city_icon from "../assets/icons/city-info_icon.svg";

export default class CityInfo extends Component {
  render() {
    const { city, type, date, degree } = this.props;
    const modifiedDate = new Date(date);
    const formattedDate = modifiedDate
      .toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      })
      .replace(/,/, " |")
      .replace(/,/, "");
    return (
      <div className="city-container">
        <div className="city-weather">
          <div className="city-info">
            <img src={location} alt=""></img>
            <span style={{ fontSize: 24 }}>{city}</span>
          </div>
          <div className="weather-info">
            <span className="weather-type" style={{ fontSize: 33 }}>
              {type}
            </span>
            <span className="degree">{degree} °C</span>
          </div>
        </div>
        <div className="icon-area">
          <img
            className="city-icon"
            width={220}
            height={220}
            src={city_icon}
            alt=""
          />
        </div>
        <div className="day-area" >
          <span style={{ fontSize: 40 }}>{formattedDate}</span> 
        </div>
      </div>
    );
  }
}
