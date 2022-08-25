import { createContext, useContext, useState } from "react";

const TimeContext  = createContext();

export const TimeProvider = ({children}) => {
    const [time, setTime] = useState(false);
    
    const values = {time, setTime};
    return <TimeContext.Provider value={values}>{children}</TimeContext.Provider>
}

export const useTime = () => useContext(TimeContext);