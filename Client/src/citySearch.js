import React, { useState } from 'react';
import WeatherService from './weatherService';

const CitySearch = () => {
  const [city, setCity] = useState('');
  const [error, setError] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const validateCityName = (name) => {
    if (!name.trim()) {
      return 'City name is required.';
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      return 'City name should contain only letters and spaces.';
    }
    return '';
  };

  const handleSearch = async () => {
    const validationError = validateCityName(city);
    if (validationError) {
      setError(validationError);
      setWeatherData(null);
      return;
    }

    setError('');
    setWeatherData(null);

    try {
      console.log('Requesting weather data for city:', city);
      const response = await WeatherService.getWeatherByCity(city);
      console.log('Response data:', response.data);

      if (response.status === 204) {
        setError('City not found.');
        return;
      }
      setWeatherData(response.data);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Error fetching weather data: ' + err.message);
    }
  };

  return (
    <div style={mainContainerStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>🌤️ City Weather Search</h2>

        <div style={formContainerStyle}>
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={inputStyle}
          />
          <button onClick={handleSearch} style={buttonStyle}>
            Search
          </button>
        </div>

        {error && <p style={errorStyle}>{error}</p>}

        {weatherData && (
          <div style={reportContainerStyle}>
            <h3 style={reportHeaderStyle}>🌆 Weather in {city}</h3>
            <div style={weatherDetailsStyle}>
              <div style={weatherDetailItemStyle}>
                <span style={detailLabelStyle}>🌡️ Temperature: </span>
                <span style={temperatureValueStyle}>{weatherData.temperature}°C</span>
              </div>
              <div style={weatherDetailItemStyle}>
                <span style={detailLabelStyle}>💧 Humidity: </span>
                <span style={humidityValueStyle}>{weatherData.humidity}%</span>
              </div>
              <div style={weatherDetailItemStyle}>
                <span style={detailLabelStyle}>⛅ Condition: </span>
                <span style={weatherConditionStyle}>{weatherData.weather}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Styles
const mainContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#f0f8ff',
  fontFamily: 'Arial, sans-serif',
};

const containerStyle = {
  width: '100%',
  maxWidth: '450px',
  padding: '20px',
  backgroundColor: '#ffffff',
  borderRadius: '15px',
  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  transition: 'transform 0.3s ease-in-out',
};

const formContainerStyle = {
  marginBottom: '20px',
};

const reportContainerStyle = {
  padding: '25px',
  backgroundColor: '#ffffff',
  borderRadius: '15px',
  textAlign: 'left',
  marginTop: '20px',
  boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
  transition: 'box-shadow 0.3s ease-in-out',
};

const reportHeaderStyle = {
  fontSize: '1.8em',
  fontWeight: 'bold',
  color: '#2196f3',  // Blue color for the header (clear sky theme)
  marginBottom: '15px',
};

const weatherDetailsStyle = {
  padding: '15px 0',
};

const weatherDetailItemStyle = {
  margin: '10px 0',
  fontSize: '1.2em',
};

const detailLabelStyle = {
  fontWeight: '600',
  color: '#00796b',  // Green color for labels (nature theme)
};

const temperatureValueStyle = {
  color: '#f44336',  // Red for temperature (warm/cold emphasis)
  fontWeight: '500',
};

const humidityValueStyle = {
  color: '#2196f3',  // Blue for humidity (cool, refreshing feel)
  fontWeight: '500',
};

const weatherConditionStyle = {
  color: '#ffa000',  // Orange for weather condition (sunny, cloudy, etc.)
  fontWeight: '500',
};

const headingStyle = {
  color: '#0077b6', // Blue for the main heading
  marginBottom: '20px',
};

const inputStyle = {
  width: '80%',
  padding: '12px',
  fontSize: '16px',
  borderRadius: '10px',
  border: '1px solid #ccc',
  marginBottom: '12px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const buttonStyle = {
  padding: '12px 24px',
  backgroundColor: '#0077b6',  // Blue button color
  color: '#fff',
  fontSize: '16px',
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
  transition: 'background-color 0.3s, transform 0.3s',
};

// const buttonHoverStyle = {
//   backgroundColor: '#005f7a',
//   transform: 'scale(1.05)',
// };

const errorStyle = {
  color: 'red',
  marginTop: '10px',
  fontSize: '16px',
  fontWeight: 'bold',
};

// Applying the hover effect directly in the button style
// const buttonStyleWithHover = {
//   ...buttonStyle,
//   ':hover': {
//     backgroundColor: '#005f7a',
//     transform: 'scale(1.05)',
//   }
// };

export default CitySearch;


































