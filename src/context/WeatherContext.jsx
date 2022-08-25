import { createContext, useContext, useState } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {
    const [weather, setWeather] = useState([]);
    const [coordinates, setCoordinates] = useState({lon: "30.5206", lat: "39.7767"});
    const values = { weather, setWeather, coordinates, setCoordinates };

    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}

export const useWeather = () => useContext(WeatherContext);
