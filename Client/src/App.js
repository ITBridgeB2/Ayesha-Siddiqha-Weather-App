import React, { useState } from 'react';
import SearchForm from './searchForm';
import WeatherDisplay from './weatherDisplay';
import SearchHistory from './historySearch';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = (data) => {
    setWeatherData(data);
  };

  return (
    <div>
      <h1>Weather Dashboard</h1>
      <SearchForm onSearch={handleSearch} />
      <WeatherDisplay weatherData={weatherData} />
      <SearchHistory />
    </div>
  );
};

export default App;

