import "./App.css";
import Header from "./components/Header";
import SelectCity from "./components/SelectCity/SelectCity";
import SelectTime from "./components/SelectTime";
import WeatherCast from "./components/WeatherCast";
import { TimeProvider } from "./context/TimeContext";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (
    <>
      <WeatherProvider>
        <TimeProvider>
          <Header />
          <div className="select">
            <SelectCity />
          </div>
          <div className="time">
            <SelectTime/>
          </div>
          <div>
            <WeatherCast />
          </div>
        </TimeProvider>
      </WeatherProvider>
    </>
  );
}

export default App;
