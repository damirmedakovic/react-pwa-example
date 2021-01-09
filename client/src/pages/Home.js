import React, { useState } from "react";

import { fetchWeather } from "../api/fetchWeather";

export default function Home() {


  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const search = async (e) => {
    if(e.key === "Enter") {
      const data = await fetchWeather(query); 

      setWeather(data);
      setQuery("");
    }
  }



  return (
    <div>

      <input type="text" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search}/>
      <div>{weather.main && (
        <div>
        <h2>
          <span>{weather.name}</span>
          <sup>{weather.sys.country}</sup>
        </h2>
        <div>
          {Math.round(weather.main.temp)}
          <sup>&deg; C</sup>
        </div>

        </div>
        
      )}</div>
      
    </div>
  );
}
