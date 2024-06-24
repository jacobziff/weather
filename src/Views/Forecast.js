import TopArea from '.././Components/TopArea';
import MiddleArea from '.././Components/MiddleArea';
import BottomArea from '.././Components/BottomArea';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Key } from '../Key';

function Forecast() {

  const [weather, setWeather] = useState(null)
  const [cityInfo, setCityInfo] = useState(null)
  
  let cityurl = `https://geocoding-api.open-meteo.com/v1/search?name=${useParams().city}&count=1&language=en&format=json`;
  useEffect(() => {
    axios.get(cityurl).then(response => {
      setCityInfo(response.data)
    })
  }, [cityurl])

  // Default to Phoenix
  let lat = 33.45
  let lng = -112.07
  let city = "Phoenix"

  if (cityInfo) {
    if (cityInfo.results) {
      lat = cityInfo.results[0].latitude
      lng = cityInfo.results[0].longitude
      city = cityInfo.results[0].name.concat(", ".concat(cityInfo.results[0].country))
    }
  }

  const currentDate = new Date();
  let hours = currentDate.getUTCHours();

  if (lat == 33.45 && lng == -112.07) {
    city = "Phoenix, United States"
  } else {
  }

  let url = "https://api.open-meteo.com/v1/forecast?latitude=".concat((lat.toString()).concat("&longitude=".concat((lng.toString()).concat("&current=temperature_2m,is_day,weather_code&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FLos_Angeles&forecast_days=16"))));

  useEffect(() => {
    axios.get(url).then(response => {
        setWeather(response.data);
    })
  }, [url])

  console.log(hours);
  console.log(weather.utc_offset_seconds);
  console.log(weather.timezone)
  hours += (-25200 / 3600)
  console.log(hours);


  return (
    <div className="flex flex-col gap-y-8 p-4">
      <TopArea weather={weather} city={city}/>
      <MiddleArea weather={weather} lat={lat} lng={lng} hours={hours}/>
      <BottomArea weather={weather}/>
    </div>
  );
}

export default Forecast;
