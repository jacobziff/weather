import TopArea from '.././Components/TopArea';
import MiddleArea from '.././Components/MiddleArea';
import BottomArea from '.././Components/BottomArea';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import Loading from '../Components/Loading';

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
      let country = cityInfo.results[0].country
      city = cityInfo.results[0].name
      if (!(city == country || (!country))) {
        city = city.concat(", ".concat(cityInfo.results[0].country)) 
      }
    }
  }

  const currentDate = new Date();
  let hours = currentDate.getUTCHours();

  let timezone = "America%2FLos_Angeles"
  if (lat == 33.45 && lng == -112.07) {
    city = "Phoenix, United States"
  }
  if (cityInfo) {
    if (cityInfo.results) {
      try {
        timezone = cityInfo.results[0].timezone
        timezone = timezone.replaceAll('/', '%2F')
      } catch (error) {
        timezone = "America%2FLos_Angeles"
      }
    }
  }

  let url = `https://api.open-meteo.com/v1/forecast?latitude=${lat.toString()}&longitude=${lng.toString()}&current=temperature_2m,is_day,weather_code&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=${timezone}&forecast_days=16`;
  useEffect(() => {
    axios.get(url).then(response => {
        setWeather(response.data);
    })
  }, [url])

  if (weather) {
    hours += (weather.utc_offset_seconds / 3600)
  } else {
    hours += (currentDate.getTimezoneOffset() / 3600)
  }
  if (hours < 0) {
    hours += 24
  }

  let code = -1;
  if (weather) {
    code = weather.current.weather_code
  }

  let opacity = 0.7
  let color = `rgba(4, 148, 252, ${opacity})`
  switch(code) {
    case 0:
    case 1:
      return <div className="bgimg-sky">
        <div className="flex flex-col gap-y-8 p-4">
          <TopArea weather={weather} city={city} bgcolor={color}/>
          <MiddleArea weather={weather} lat={lat} lng={lng} hours={hours} bgcolor={color}/>
          <BottomArea weather={weather} bgcolor={color}/>
        </div>
      </div>
    case 2:
      color = `rgba(54, 114, 182, ${opacity})`
      return <div className="bgimg-cloudy">
        <div className="flex flex-col gap-y-8 p-4">
          <TopArea weather={weather} city={city} bgcolor={color}/>
          <MiddleArea weather={weather} lat={lat} lng={lng} hours={hours} bgcolor={color}/>
          <BottomArea weather={weather} bgcolor={color}/>
        </div>
      </div>
    case 3:
    case 45:
    case 48:
      color = `rgba(144, 144, 144, ${opacity})`
      return <div className="bgimg-overcast">
        <div className="flex flex-col gap-y-8 p-4">
          <TopArea weather={weather} city={city} bgcolor={color}/>
          <MiddleArea weather={weather} lat={lat} lng={lng} hours={hours} bgcolor={color}/>
          <BottomArea weather={weather} bgcolor={color}/>
        </div>
      </div>
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
    case 80:
    case 81:
    case 82:
      color = `rgba(110, 127, 128, ${opacity})`
      return <div className="bgimg-rain">
        <div className="flex flex-col gap-y-8 p-4">
          <TopArea weather={weather} city={city} bgcolor={color}/>
          <MiddleArea weather={weather} lat={lat} lng={lng} hours={hours} bgcolor={color}/>
          <BottomArea weather={weather} bgcolor={color}/>
        </div>
      </div>
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      color = `rgba(77, 75, 75, ${opacity})`
      return <div className="bgimg-snow">
        <div className="flex flex-col gap-y-8 p-4">
          <TopArea weather={weather} city={city} bgcolor={color}/>
          <MiddleArea weather={weather} lat={lat} lng={lng} hours={hours} bgcolor={color}/>
          <BottomArea weather={weather} bgcolor={color}/>
        </div>
      </div>
    case 95:
    case 96:
    case 99:
      color = `rgba(27, 57, 91, ${opacity})`
      return <div className="bgimg-thunder">
        <div className="flex flex-col gap-y-8 p-4">
          <TopArea weather={weather} city={city} bgcolor={color}/>
          <MiddleArea weather={weather} lat={lat} lng={lng} hours={hours} bgcolor={color}/>
          <BottomArea weather={weather} bgcolor={color}/>
        </div>
      </div>
    default:
      return <div>
        <Loading/>
      </div>
  }
}

export default Forecast;
