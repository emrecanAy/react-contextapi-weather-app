import { Select } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useWeather } from "../../context/WeatherContext";
import cities from "../../api/cities.json";

const { Option } = Select;



function SelectCity() {
  const [city, setCity] = useState("Eskişehir");

  const { setWeather, coordinates, setCoordinates } = useWeather();

  const getWeatherData = async (latitude, longitude) => {
    const url = "https://api.openweathermap.org/data/2.5/";
    const key = process.env.REACT_APP_API_KEY;
    try {
      const { data } = await axios.get(
        `${url}onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=current,minutely,hourly,alerts&appid=${key}`
      );
      return data;
    } catch (error) {
      alert("Something wet wrong...");
    }
    
  };

  const handleChange = (value) => {
    setCity(value);
    const data = cities.filter((d) => d.name === value);
    setCoordinates({...coordinates, lon: data[0].longitude, lat: data[0].latitude});
  };

  useEffect(() => {
        getWeatherData(coordinates.lat, coordinates.lon)
        .then(data => setWeather(data))
        .catch(err => alert("Something went wrong: "+err))
        .finally();
  }, [coordinates, setWeather])

  return (
    <div>
      <Select
        style={{ width: 200 }}
        onChange={handleChange}
        value={city}
        size={"large"}
      >
        {cities.map((city) => (
          <Option key={city.id} value={city.name}>
            {city.name}
          </Option>
        ))}
      </Select>
    </div>
  );
}

export default SelectCity;
