import React, { useState } from 'react';
import axios from 'axios';

const SearchForm = ({ onSearch }) => {
  const [city_name, setCity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (city_name.trim()) {
      try {
        const response = await axios.get(`http://localhost:5000/weather/${city_name}`);
        onSearch(response.data);  // Send data to parent component
        setCity('');
      } catch (error) {
        alert("Error fetching weather data.");
      }
    } else {
      alert("Please enter a city name.");
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={city_name}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="input"
        />
        <button type="submit" className="button">Search</button>
      </form>

      {/* Internal CSS for this component */}
      <style jsx>{`
        .wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 50vh; 
          background: linear-gradient(to right, #e0f7fa, #f9f9f9);
          padding: 20px;
        }

        .form {
          background-color: #ffffff;
          padding: 30px 40px;
          border-radius: 16px;
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: row;
          gap: 12px;
          align-items: center;
          transition: all 0.3s ease-in-out;
          width: 100%;
          max-width: 600px;
        }

        .input {
          flex-grow: 1;
          padding: 12px 18px;
          font-size: 16px;
          border: 2px solid #ccc;
          border-radius: 8px;
          outline: none;
          transition: border-color 0.3s, box-shadow 0.3s;
        }

        .button {
          padding: 12px 24px;
          font-size: 16px;
          border-radius: 8px;
          border: none;
          background-color: #007BFF;
          color: #ffffff;
          cursor: pointer;
          font-weight: bold;
          transition: background-color 0.3s, transform 0.2s;
        }

        .button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default SearchForm;

























