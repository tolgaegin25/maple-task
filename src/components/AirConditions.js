import React, { Component } from "react";
import { AirConditions_Types } from "../enums/icons.enums.ts";
import air_conditions_icon from "../assets/icons/air_conditions_icon.svg";

export default class AirConditions extends Component {
  render() {
    const { airConditions, date } = this.props;
    const airConditionsArray = airConditions.split("::");
    const dateObject = new Date(date);
    dateObject.setUTCHours(20, 0, 0, 0);
    const formattedTime = dateObject.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "GMT",
    });

    console.log(formattedTime);
    const titles = ["Real Feel", "Change of Rain", "Wind", "UV Index"];
    const units = ["°", "%", "km/hr", ""];
    return (
      <div className="air-conditions-container">
        <div className="air-conditions">
          <div className="title">
            <div className="title_w_icon">
              <img src={air_conditions_icon} alt="" />
              <span style={{ fontSize: 32 }}>{formattedTime} GMT</span>
            </div>
            <span style={{ fontSize: 32, fontWeight: "bold" }}>
              AIR CONDITIONS
            </span>
          </div>
          <div className="content">
            <div className="grid-container">
              {Object.entries(airConditionsArray).map((item, index) => (
                <div className="item-container" key={index}>
                  <img
                    width={55}
                    height={60}
                    src={
                      AirConditions_Types[
                        titles[index].replace(/\s/g, "_").toLowerCase()
                      ]
                    }
                    alt=""
                  ></img>
                  <div className="item-info">
                    <span>{titles[index]}</span>
                    <div className="item-unit">
                      <span>{item[1]}</span>
                      <span> {units[index]}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
