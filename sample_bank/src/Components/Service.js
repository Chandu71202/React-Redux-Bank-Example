import React from 'react';
import './Service.css'; 

const Service = () => {
  return (
    
    <div className="service-container ">
      <div className="service-box">
        <h1 className='h1-service-box'>Services</h1>
        <div className="button-container">
          <div className="button-group">
            <button className="button1">Exchanges </button>
            <button className="button1">Fintech </button>
            <button className="button1"> Banking</button>
          </div>
          <div className="button-group">
            <button className="button1"> Investments </button>
            <button className="button1">Loans</button>
            <button className="button1">Insurance  </button>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Service;
