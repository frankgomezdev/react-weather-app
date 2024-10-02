import { WeatherCodes } from "../constants";

WeatherCodes

const HourlyWeatherItem = ({hourlyWeather}) => {
  const temperature = Math.floor(hourlyWeather.temp_f);
  const time = hourlyWeather.time.split(" ")[1].substring(0, 5);
  const weatherIcon = Object.keys(WeatherCodes).find((icon) =>
    WeatherCodes[icon].includes(hourlyWeather.condition.code)
  );

  return (
    <li className="weather-item">
              <p className="time">{time}</p>
              <img src={`icons/${weatherIcon}.svg`} alt="" className="weather-icon" />
              <p className="temperature">{temperature}</p>
            </li>
  )
}

export default HourlyWeatherItem