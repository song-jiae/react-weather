import React from "react";

const WeatherButton = ({ cities, setCity }) => {
  console.log("cities", cities);
  return (
    <div className="WeatherBtn">
      <button className="currentLocation" onClick={() => setCity("")}>
        {/* <h5>현재 위치</h5>
        <img src={process.env.PUBLIC_URL + "./images/clouds.png"} alt="" />
        <h5>12℃</h5> */}
      </button>
      {cities.map((item, index) => (
        <button key={index} onClick={() => setCity(item)}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default WeatherButton;
