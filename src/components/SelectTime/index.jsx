import { Switch } from "antd";
import React from "react";
import { useTime } from "../../context/TimeContext";

function SelectTime() {

    const {time, setTime} = useTime();

  return (
    <Switch
      checkedChildren="Night"
      unCheckedChildren="Day"
      checked={time}
      onChange={setTime}
      style={{ backgroundColor: "black", alignItems: "end" }}
    />
  );
}

export default SelectTime;
