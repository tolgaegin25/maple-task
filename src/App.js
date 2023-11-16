import "./App.css";
import Activities from "./components/Activities";
import AirConditions from "./components/AirConditions";
import CityInfo from "./components/CityInfo";
import DailyForecast from "./components/DailyForecast";
import HourlyForecast from "./components/HourlyForecast";
import Menu from "./components/Menu";
import data from "./data/data.json";
import header_logo from "./assets/images/header-logo.png";

function App() {
  return (
    <div className="container">
      <div className="top-items">
        <img width={"100%"} className="mobile-logo" src={header_logo} alt="" />
        <CityInfo
          city={data.city}
          type={data.type}
          date={data.date}
          degree={data.degree}
        />
        <div className="top-column">
          <img width={200} className="desktop-logo" src={header_logo} alt="" />
          <HourlyForecast forecast={data.forecast} />
        </div>
      </div>
      <div className="bottom-items">
        <Menu />
        <div className="bottom-column">
          <Activities />
          <DailyForecast weeklyInfo={data.weeklyWeather} />
        </div>
        <AirConditions airConditions={data.airConditions} date={data.date} />
      </div>
    </div>
  );
}

export default App;
