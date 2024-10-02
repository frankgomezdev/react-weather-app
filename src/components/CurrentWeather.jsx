const CurrentWeather = ({ currentWeather }) => {
  return (
    <div className="current-weather">
      <img src={`icons/${currentWeather.weatherIcon}.svg`} alt="" className="weather-icon" />
      <h2 className="temperature">
        {currentWeather.temperature} <span>°F</span>
      </h2>
      <p className="description">{currentWeather.description}</p>
    </div>
  );
};

export default CurrentWeather;
