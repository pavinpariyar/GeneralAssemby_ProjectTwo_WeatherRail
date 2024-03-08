import React, { useState, useEffect, FormEvent } from 'react';
import { fetchWeatherData, fetchFiveDayForecast, WeatherData, ForecastData } from '../services/weatherApi';

const Weather: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [location, setLocation] = useState('London, GB');
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const loadData = async () => {
      const weatherData = await fetchWeatherData(location);
      setWeather(weatherData);

      const forecastData = await fetchFiveDayForecast(location); 
      setForecast(forecastData);
    };

    loadData();
  }, [location]);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    setLocation(inputValue);
  };

  if (!weather || !forecast) {
    return <div>Loading...</div>;
  }

  const dailyForecast = forecast.list.filter((_, index) => index % 8 === 4);

  // Render weather data here
  return (
    <div className="box">
      <div className="card">
        <div className="card-content has-text-centered">
          <h2 className="title has-text-centered is-size-1 has-text-weight-bold">Todays Weather in {weather.name}</h2>
          <figure className="image is-128x128 container">
            <img className="icon-large mx-auto" src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="Weather icon" />
          </figure>
          <p className="title is-4 has-text-grey">Condition: {weather.weather[0].description}</p>
          <p className="title is-4 has-text-grey">Temperature: {weather.main.temp}°C</p>
        </div>
      </div>
      {/* Display the forecast */}
      <div className="card">
        <div className="columns is-mobile is-multiline">
          {dailyForecast.map((forecastDay, index) => (
            <div className="column is-one-fifth-desktop is-one-third-tablet is-half-mobile" key={index}>
              <div className="forecast-card">
                <p className="has-text-weight-bold">{new Date(forecastDay.dt * 1000).toLocaleDateString(undefined, { weekday: 'short' })}</p>
                <p>{Math.round(forecastDay.main.temp)}°C</p>
                <p>{forecastDay.weather[0].description}</p>
                <img src={`http://openweathermap.org/img/w/${forecastDay.weather[0].icon}.png`} alt="Weather icon" />
              </div>
            </div>
          ))}
          <div className="search">
            <form onSubmit={handleSearch}>
              <div className="field">
                <div className="control is-expanded">
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter location for weather(eg. London, GB)"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    style={{ width: '400px' }}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button className="button is-info" type="submit" disabled={!inputValue}>Search</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
