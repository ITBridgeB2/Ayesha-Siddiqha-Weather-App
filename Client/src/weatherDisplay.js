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








// import React from 'react';

// const WeatherDisplay = ({ weatherData }) => {
//   if (!weatherData) {
//     return (
//       <div style={styles.container}>
//         <div style={styles.placeholder}>Enter a city to view the weather.</div>
//       </div>
//     );
//   }

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <h3 style={styles.city}>
//           {weatherData.city_name}, <span style={styles.country}>{weatherData.country}</span>
//         </h3>
//         <p style={styles.detail}><span style={styles.label}>🌡 Temperature:</span> {weatherData.temperature}°C</p>
//         <p style={styles.detail}><span style={styles.label}>💧 Humidity:</span> {weatherData.humidity}%</p>
//         <p style={styles.detail}><span style={styles.label}>🌤 Weather:</span> {weatherData.weather}</p>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     height: '100vh', // full viewport height
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     background: 'linear-gradient(135deg, #e0f7fa, #fff)',
//     padding: '0', // Remove padding to eliminate the gap
//   },
//   placeholder: {
//     fontSize: '18px',
//     color: '#666',
//     fontStyle: 'italic',
//     textAlign: 'center',
//   },
//   card: {
//     background: 'linear-gradient(135deg, #87cefa, #f0f8ff)',
//     padding: '20px',
//     borderRadius: '12px',
//     boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
//     maxWidth: '360px', // Slightly larger width for better readability
//     width: '100%',
//     color: '#2c3e50',
//     fontFamily: 'Poppins, sans-serif',
//     textAlign: 'center',
//     marginTop: '10px', // Adjust if needed to remove any unintended gaps between elements
//   },
//   city: {
//     fontSize: '24px',
//     fontWeight: 'bold',
//     marginBottom: '8px',
//     color: '#1f4e79',
//   },
//   country: {
//     fontWeight: 'normal',
//     color: '#3f6c9b',
//     fontSize: '18px',
//   },
//   detail: {
//     fontSize: '16px',
//     margin: '8px 0',
//     color: '#213547',
//   },
//   label: {
//     fontWeight: '600',
//     color: '#005f73',
//   },
// };

// export default WeatherDisplay;















// import React from 'react';

// const WeatherDisplay = ({ weatherData }) => {
//   if (!weatherData) return <div>Enter a city to view the weather.</div>;

//   return (
//     <div>
//       <h3>{weatherData.city_name}, {weatherData.country}</h3>
//       <p>Temperature: {weatherData.temperature}°C</p>
//       <p>Humidity: {weatherData.humidity}%</p>
//       <p>Weather: {weatherData.weather}</p>
//     </div>
//   );
// };

// export default WeatherDisplay;
