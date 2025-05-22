import React from 'react';

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) {
    return (
      <div className="container">
        <div className="placeholder">Enter a city to view the weather.</div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <h3 className="city">
          {weatherData.city_name}, <span className="country">{weatherData.country}</span>
        </h3>
        <p className="detail"><span className="label">🌡 Temperature:</span> {weatherData.temperature}°C</p>
        <p className="detail"><span className="label">💧 Humidity:</span> {weatherData.humidity}%</p>
        <p className="detail"><span className="label">🌤 Weather:</span> {weatherData.weather}</p>
      </div>

      {/* Internal CSS for this component */}
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          padding: 10px 0;
        }

        .card {
          background: linear-gradient(135deg, #87cefa, #f0f8ff);
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          max-width: 360px;
          width: 100%;
          color: #2c3e50;
          font-family: 'Poppins', sans-serif;
          text-align: center;
          margin-top: 10px;
        }

        .city {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 8px;
          color: #1f4e79;
        }

        .country {
          font-weight: normal;
          color: #3f6c9b;
          font-size: 18px;
        }

        .detail {
          font-size: 16px;
          margin: 8px 0;
          color: #213547;
        }

        .label {
          font-weight: 600;
          color: #005f73;
        }
      `}</style>
    </div>
  );
};

export default WeatherDisplay;








