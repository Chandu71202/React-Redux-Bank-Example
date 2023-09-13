import React from 'react';
import './Home.css';

const HomePage = () => {
  return (
    <div className="Home">
      <header className="Home-header">
        <h1>NatWest Banking App</h1>
        <div className="button-container">
          <button className="button">Register</button>
          <button className="button">Service</button>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
