import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import React  from "react";

function WeatherCard({day, imgSource, description, temp, main }) {

  return (
    <div>
      <Card
        hoverable
        bordered={false}
        style={{
          width: 165,     
        }}
        cover={<img alt={description} src={imgSource} title={description} />}
      >
        <Meta title={day} description={description} />
        <div>{temp +"°C "+ main}</div>
      </Card>
    </div>
  );
}

export default WeatherCard;
