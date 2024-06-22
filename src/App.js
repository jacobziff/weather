import TopArea from './Components/TopArea';
import MiddleArea from './Components/MiddleArea';
import BottomArea from './Components/BottomArea';
import './index.css';
import './tailwind.css';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function App() {

  const [weather, setWeather] = useState(null)

  let lat = 33.45
  let lng = -112.07

  let url = "https://api.open-meteo.com/v1/forecast?latitude=".concat((lat.toString()).concat("&longitude=".concat((lng.toString()).concat("&current=temperature_2m,is_day,weather_code&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FLos_Angeles&forecast_days=16"))));

  useEffect(() => {
    axios.get(url).then(response => {
        setWeather(response.data)
    })
  }, [url])


  return (
    <div className="flex flex-col gap-y-8 p-4">
      <TopArea weather={weather}/>
      <MiddleArea weather={weather}/>
      <BottomArea weather={weather}/>
    </div>
  );
}

export default App;
