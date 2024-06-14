import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const apiKey = '371ff8c1b7dc72ebc6cdff5859412dba';

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
      );
      
      setWeatherData(response.data);
      setError('');
    } catch (err) {
      setError('Unable to fetch weather data. Please check the location.');
    }
  };

  const handleSearch = () => {
    if (location) {
      fetchWeather();
    } else {
      setError('Please enter a location.');
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter city name or zip code"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {error && <p>{error}</p>}
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Date and Time: {new Date().toLocaleString()}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
