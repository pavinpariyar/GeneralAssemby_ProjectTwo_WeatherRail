import React, { useState, useEffect } from 'react';
import { fetchWeatherData, WeatherData } from '../services/weatherApi';

const Weather: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchWeatherData('London, GB'); 
      setWeather(data);
    };

    loadData();
  }, []);

  if (weather === null) {
    return <div>Loading...</div>;
  }

  // Render your weather data here
  return (
    <div>
      <h2>Weather in {weather.name}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Condition: {weather.weather[0].description}</p>
      <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="Weather icon" />
    </div>
  );
};

export default Weather;