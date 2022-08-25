import React from "react";
import { useTime } from "../../context/TimeContext";
import { useWeather } from "../../context/WeatherContext";
import WeatherCard from "../WeatherCard";

function WeatherCast() {
  const { weather } = useWeather();
  const { time } = useTime();

  console.log(weather)

  const icons = {
    "01d": "https://cdn-icons-png.flaticon.com/512/3093/3093303.png",
    "02d": "https://cdn-icons-png.flaticon.com/512/3093/3093345.png",
    "03d": "https://cdn-icons-png.flaticon.com/512/3093/3093456.png",
    "04d": "https://cdn-icons-png.flaticon.com/512/3093/3093309.png",
    "09d": "https://cdn-icons-png.flaticon.com/512/3093/3093341.png",
    "10d": "https://cdn-icons-png.flaticon.com/512/3093/3093390.png",
    "11d": "https://cdn-icons-png.flaticon.com/512/3093/3093349.png",
    "13d": "https://cdn-icons-png.flaticon.com/512/3093/3093353.png",
    "50d": "https://cdn-icons-png.flaticon.com/512/3093/3093356.png",
  };

  const nightIcons = {
    "01d": "https://cdn-icons-png.flaticon.com/512/3093/3093322.png",
    "02d": "https://cdn-icons-png.flaticon.com/512/3093/3093333.png",
    "03d": "https://cdn-icons-png.flaticon.com/512/3093/3093456.png",
    "04d": "https://cdn-icons-png.flaticon.com/512/3093/3093309.png",
    "09d": "https://cdn-icons-png.flaticon.com/512/3093/3093341.png",
    "10d": "https://cdn-icons-png.flaticon.com/512/3093/3093469.png",
    "11d": "https://cdn-icons-png.flaticon.com/512/3093/3093349.png",
    "13d": "https://cdn-icons-png.flaticon.com/512/3093/3093353.png",
    "50d": "https://cdn-icons-png.flaticon.com/512/3093/3093356.png",
  };

  return (
    
    <>
      <div className="App">
        {weather.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          time ? 
          weather.daily.map((data, i) =>
            data.weather.map((d) => (
              <WeatherCard
                key={d.id}
                day={new Date(data.dt * 1000).toLocaleDateString("en", {
                  weekday: "long",
                })}
                imgSource={nightIcons[d.icon]}
                description={d.description}
                temp={data.temp.night}
                main={d.main}
              />
            ))
          )
          : 
          (
            weather.daily.map((data, i) =>
            data.weather.map((d) => (
              <WeatherCard
                key={d.id}
                day={new Date(data.dt * 1000).toLocaleDateString("en", {
                  weekday: "long",
                })}
                imgSource={icons[d.icon]}
                description={d.description}
                temp={data.temp.day}
                main={d.main}
              />
            ))
          )
          )
        )}
      </div>
    </>
  );
}

export default WeatherCast;
