import React, { Component } from "react";
import white_logo from "../assets/icons/header-logo-white.png";
import explore from "../assets/icons/explore.png";
import location from "../assets/icons/location-gray.png";
import settings from "../assets/icons/settings.png";
import sun_rainy from "../assets/icons/sun_rainy.png";

export default class Menu extends Component {
  render() {
    const menu_items = [
      {
        icon: white_logo,
        text: "",
      },
      {
        icon: sun_rainy,
        text: "Weather",
      },
      {
        icon: explore,
        text: "explore",
      },
      {
        icon: location,
        text: "cities",
      },
      {
        icon: settings,
        text: "settings",
      },
    ];
    return (
      <div className="menu">
        <div className="menu-container">
          {menu_items.map((item, index) => (
            <div
            className="menu-item"
              key={index}
              style={{ display: "flex", flexDirection: "column",alignItems:'center' }}
            >
              <img className="menu-logo" src={item.icon} alt="menu-logo"></img>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
