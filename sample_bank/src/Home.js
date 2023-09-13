import React from 'react';
import './Home.css';
import {  useNavigate } from 'react-router-dom';

const HomePage = () => {

    let navigate = useNavigate();
    const register = ()=>{
        navigate('/register');
    }

    const service = ()=>{
        navigate('/service');
    }

    
  return (
    <div className="Home">
      <header className="Home-header">
        <h1>NatWest Banking App</h1>
        <div className="button-container">
          <button className="button" onClick={()=>register()}>Register</button>
          <button className="button" onClick={()=>service()}>Service</button>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
