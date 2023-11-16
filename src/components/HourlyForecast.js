import React, { Component } from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import hour_icon from "../assets/icons/hour_icon.svg"

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default class HourlyForecast extends Component {
  render() {
    const { forecast } = this.props;

    const data = {
      labels: Object.keys(forecast),
      datasets: [
        {
          label: "Hourly Forecast",
          data: Object.values(forecast),
          fill: false,
          borderColor: "rgba(240, 240, 240, 1)",
          borderWidth: 2,
          backgroundColor: "rgba(0,0,0,0)",
          pointStyle: "rectRot",
        },
      ],
    };

    const options = {
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      maintainAspectRatio: false,
      responsive: true,
      height: 120,
    };

    const containerStyle={
      borderRadius: "27.244px",
      background: "rgba(196, 195, 193, 0.4)",
      overflow:'hidden',
      padding:'10px',
      height:'100px',
      display:'flex',
      flexDirection:'column',
      alignItems:'flex-start',
      width: '400px',

    }
    const chartStyle = {
      overflow: "hidden",
      height: "100px", 
      width:"100%", 
    };

    return (
      <div className="hourly-forecast-container" style={containerStyle}>
        <div style={{display:'flex',flexDirection:'row',gap:'5',marginBottom:'10px'}}>
          <img src={hour_icon} alt=""/>
        <span style={{margin:10}}>Hourly Forecast</span>
        </div>
        
        <div style={chartStyle}>
          <Line data={data} options={options} />
        </div>
      </div>
    );
  }
}
