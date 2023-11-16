import React, { Component } from "react";
import { weatherTypes } from "../enums/icons.enums.ts";

export default class DailyForecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  handlePreviousClick = () => {
    const { weeklyInfo } = this.props;
    const lastIndex = Object.keys(weeklyInfo).length - 1;
    this.setState((prevState) => {
      const newIndex =
        prevState.currentIndex === 0 ? lastIndex : prevState.currentIndex - 1;
      return {
        currentIndex: newIndex,
      };
    });
  };

  handleNextClick = () => {
    const { weeklyInfo } = this.props;
    const lastIndex = Object.keys(weeklyInfo).length - 1;

    this.setState((prevState) => {
      const newIndex =
        prevState.currentIndex === lastIndex ? 0 : prevState.currentIndex + 1;
      return {
        currentIndex: newIndex,
      };
    });
  };

  render() {
    const { weeklyInfo } = this.props;
    const currentIndex = this.state.currentIndex;
    const selectedInfo = Object.values(weeklyInfo)[currentIndex];
    return (
      
        <div className="daily-forecast-container">
          <div className="left-arrow">
            <svg
              onClick={this.handlePreviousClick}
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
            >
              <path
                d="M10.8612 1.20709L4.22383 7.84446L10.8612 14.4818"
                stroke="white"
                strokeWidth="1.2068"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="day-container">
            {Object.entries(selectedInfo).map(([day, info]) => (
              <div key={day} className="day-wrapper">
                <div className="day-info">
                  <span className="day-name">{day}</span>
                  <div className="img-container">
                    <img
                      src={
                        weatherTypes[
                          info.type.replace(/\s/g, "_").toLowerCase()
                        ]
                      }
                      alt=""
                    />
                  </div>
                  <span>{info.degree} °C</span>
                </div>
              </div>
            ))}
          </div>
          <div className="right-arrow">
            <svg
              onClick={this.handleNextClick}
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="15"
              viewBox="0 0 9 15"
              fill="none"
            >
              <path
                d="M1 14.2747L7.63737 7.63735L1 0.999982"
                stroke="white"
                strokeWidth="1.2068"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
    );
  }
}
