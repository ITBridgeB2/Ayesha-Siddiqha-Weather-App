import React from 'react';

function SearchHistory({ history }) {
  const containerStyle = {
    padding: '1.5rem',
    background: 'linear-gradient(to right, #e0f2f1, #b2dfdb)',
    borderRadius: '16px',
    boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
    fontFamily: '"Segoe UI", sans-serif',
    color: '#004d40'
  };

  const headingStyle = {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#00695c',
    textAlign: 'center',
    textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
  };

  const listStyle = {
    listStyleType: 'none',
    paddingLeft: '0',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
    fontSize: '1rem'
  };

  const listItemStyle = {
    padding: '0.6rem 1rem',
    borderRadius: '8px',
    backgroundColor: '#ffffffcc',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
    transition: 'transform 0.2s ease',
  };

  const hoverEffect = (e) => {
    e.currentTarget.style.transform = 'scale(1.03)';
  };

  const removeHoverEffect = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <div style={containerStyle}>
      <h3 style={headingStyle}>📜 Recent Searches</h3>
      <ul style={listStyle}>
        {history.map((item) => (
          <li
            key={item.id}
            style={listItemStyle}
            onMouseEnter={hoverEffect}
            onMouseLeave={removeHoverEffect}
          >
            <strong>{item.city}</strong> — {new Date(item.timestamp).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchHistory;