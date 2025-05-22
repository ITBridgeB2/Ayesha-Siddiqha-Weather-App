import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SearchHistory = () => {
  const [searches, setSearches] = useState([]);

  useEffect(() => {
    const fetchSearchHistory = async () => {
      try {
        const response = await axios.get('http://localhost:5000/searches');
        setSearches(response.data);
      } catch (error) {
        console.error("Error fetching search history", error);
      }
    };

    fetchSearchHistory();
  }, []);

  return (
    <div className="history-container">
      <h3 className="title">Recent Searches</h3>
      <ul className="search-list">
        {searches.map((search) => (
          <li key={search.id} className="search-item">
            {search.city_name} - {search.country} - {new Date(search.last_updated).toLocaleString()}
          </li>
        ))}
      </ul>

      {/* Internal CSS for this component */}
      <style jsx>{`
        .history-container {
          padding: 20px;
          background: linear-gradient(to right, #e0f7fa, #ffffff);
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          max-width: 600px;
          margin: 20px auto;
          font-family: 'Arial', sans-serif;
        }

        .title {
          font-size: 24px;
          color: #0077b6;
          text-align: center;
          margin-bottom: 20px;
        }

        .search-list {
          list-style-type: none;
          padding: 0;
        }

        .search-item {
          font-size: 16px;
          color: #333;
          padding: 10px;
          margin: 10px 0;
          background-color: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: background-color 0.3s ease;
        }

        .search-item:hover {
          background-color: #e0f7fa;
        }
      `}</style>
    </div>
  );
};

export default SearchHistory;





































